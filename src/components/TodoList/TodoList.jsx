import React, {useState, useEffect} from "react";

import Todo from "../Todo/Todo.jsx";

export default function TodoList({ tasks, updateTasks}) {
const [taskList, setTasks] = useState([
    ...tasks
  ])
const [newTaskText, setNewTaskText] = useState('')

const [filter, setFilter] = useState('active') // 'active', 'completed', 'all'

  // Sync taskList with tasks prop
  useEffect(() => {
    setTasks([...tasks])
  }, [tasks])

  const handleFormSubmit = (event) => {
      event.preventDefault()
      if (newTaskText.trim() !== '') {
        addTask(newTaskText)
        setNewTaskText('')
        document.getElementById('newTodoInput').value = ''
      }
    }

  const handleInputChange = (event) => {
      setNewTaskText(event.target.value)
    }

  const editTask = (id) => {
    const taskToEdit = taskList.find((task) => task.id === id)
    document.getElementById('newTodoInput').value = taskToEdit.text
    setNewTaskText(taskToEdit.text)
    deleteTask(id)
    document.getElementById('addButton').textContent = 'Update'
    document.getElementById('addButton').setAttribute('aria-label', `Update task: ${taskToEdit.text}`)
    document.getElementById('newTodoInput').focus()
  }

  const completeTask = (id) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    updateTasks(updatedTasks)
  }

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const addTask = (text) => {
    let newTaskId = taskList.length + 1;
    while (taskList.some((task) => task.id === newTaskId)) {
      newTaskId++;
    }
    const newTask = {
      id: newTaskId,
      text,
      completed: false
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
    document.getElementById('addButton').textContent = 'Add'
    document.getElementById('addButton').setAttribute('aria-label', 'Add new task')
  }
  return (
    <div className="todoListWrapper">
    <form onSubmit={handleFormSubmit} className="form">
        <h2 className="labelWrapper">
          <label htmlFor="newTodoInput" className="label">
            Add new task
          </label>
        </h2>
        <input
          type="text"
          id="newTodoInput"
          className="input"
          name="text"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn_add">
          <span id="addButton">Add</span>
          <span className="visuallyHidden"> task</span>
        </button>
      </form>
      <div className="filters">
        <button type="button" className="btn" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          <span className="visuallyHidden">Show </span>
          <span>all</span>
          <span className="visuallyHidden"> tasks</span>
        </button>
        <button type="button" className="btn" aria-pressed={filter === 'active'} onClick={() => setFilter('active')}>
          <span className="visuallyHidden">Show </span>
          <span>Active</span>
          <span className="visuallyHidden"> tasks</span>
        </button>
        <button type="button" className="btn" aria-pressed={filter === 'completed'} onClick={() => setFilter('completed')}>
          <span className="visuallyHidden">Show </span>
          <span>Completed</span>
          <span className="visuallyHidden"> tasks</span>
        </button>
      </div>

      <ul
        role="list"
        className="todoList"
        aria-labelledby="todoListHeading">
        <h2 id="todoListHeading" className="visuallyHidden">
          Task List
        </h2>
        {taskList.map((task) => (
            (filter === 'all' || (filter === 'active' && !task.completed) || (filter === 'completed' && task.completed)) &&
          <Todo
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </ul>
    </div>
  );
}