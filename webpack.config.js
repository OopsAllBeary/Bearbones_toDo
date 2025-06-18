const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function (_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        mode: 'development',
        entry: {
            index: './src/core/index.js',
        },
        devtool: 'inline-source-map',
        devServer: {
            static: './dist',
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Task Manager',
                template: './src/core/index.html'
            }),
            new Dotenv({
                path: path.resolve(__dirname, isProduction ? '.env.prod' : '.env.dev'),
                systemvars: true
            })
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: "/",
            clean: true
        },
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                            comments: false,
                            ascii_only: true
                        },
                        warnings: false
                    }
                }),
                new CssMinimizerPlugin()
            ],
            splitChunks: {
                chunks: "all",
                minSize: 0,
                maxInitialRequests: 10,
                maxAsyncRequests: 10,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module, chunks, cacheGroupKey) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];
                            return `${cacheGroupKey}.${packageName.replace("@", "")}`;
                        }
                    },
                    common: {
                        minChunks: 2,
                        priority: -10
                    }
                }
            },
            runtimeChunk: "single"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? "production" : "development"
                        }
                    }
                },
                {
                    test: /.s?css$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "postcss-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                api: "modern"
                            }
                        }
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"]
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(mp3|wav)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.mp4$/,
                    type: 'asset/resource'
                }
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"]
        }
    }

};