import React from 'react'
import Navigation from '../components/Navigation/Navigation.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// ROUTE IMPORTS
import Home from '../routes/Home/Home.jsx'

const Routes = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      Component: Navigation,
      children: [
        {
          index: true,
          Component: Home,
          loader: async () => {
            console.log('Loading tasks from localStorage...')
            const tasks = JSON.parse(localStorage.getItem('tasks')) || []
            console.log('Loaded tasks:', tasks)
            return { tasks }
          },
        },
        // NAV ROUTER
      ]
    },
    // OUT ROUTER
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default function App() {
  return (
    <Routes />
  )
}