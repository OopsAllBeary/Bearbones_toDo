## Intro

Hi! Thanks for checking out my code. I wanted to show you I know what I'm doing without accidently throwing myself into this project and making something overly flashy, as much as I wanted to. So I made sure to show off all the required functionality working efficiently, from managing a to do list to persistent data (using local storage). I added a couple small css animations, hover states, etc. and mostly used semantic html and accessibility flags where needed.

If I were to continue with this project, I would:

<ol>
<li>
Add animation states when todos move in and out of completion
</li>
<li>
Use a modal for adding and editing for better user experience
</li>
<li>
Clean up the code to be more consistent, i switch between camel case and dashes a couple times and i don't like that.
</li>
<li>
Clean up dependencies that aren't needed. I run webpack often enough that I have a configuration i like, and in pulling that in to kick this off, i added a few packages I don't actually need for this project. This doesn't matter unless we're trying to save milliseconds in compile time.
</li>

## How to run

This is a pretty straight forward webpack dev server. Simply clone the repository, then run 'npm i' in the directory to install dependencies. Running 'npm run start' will start the dev server with hot loading enabled, allowing you to edit in real time. Running 'npm run build' will build the site for production, placing everything needed in the dist/ folder.
