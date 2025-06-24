import React, { useEffect, useState } from 'react'

import TodoList from '../../components/TodoList/TodoList.jsx'
import { useLoaderData } from 'react-router'


export default function Home() {
  const loaderData = useLoaderData()
  const [tasks, setTasks] = useState([
  ])

  useEffect(() => {
    if (loaderData && loaderData.tasks) {
      _setTasks(loaderData.tasks)
    } else {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
      _setTasks(storedTasks)
    }
  }, [loaderData])

  useEffect(() => {
    const currentTasks = JSON.parse(localStorage.getItem('tasks')) || []
    if (!tasks || tasks.length === 0 || JSON.stringify(tasks) === JSON.stringify(currentTasks)) {
      return
    }
    console.log('Saving tasks to localStorage:', tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  const _setTasks = (newTasks) => {
    console.log('Updating tasks:', newTasks)
    setTasks(newTasks)
    
  }

  

  return (
    <main className="home">
      <header>
        <h1>Task Manager</h1>

      </header>
      <TodoList
        tasks={tasks}
        updateTasks={_setTasks}
        />
    </main>
  )
}