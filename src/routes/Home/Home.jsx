import React, { useEffect, useState } from 'react'

import Todo from '../../components/Todo/Todo.jsx'


export default function Home() {

  const taskList = [
    { id: 1, text: 'Test 1', completed: false },
    { id: 2, text: 'Test 2', completed: false },
    { id: 3, text: 'Test 3', completed: false }
  ]

  return (
    <main className="home">
      <header>
        <h1>Task Manager</h1>

      </header>
      <form>
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
        />
        <button type="submit" className="btn_add">
          Add
        </button>
      </form>
      <div className="filters">
        <button type="button" className="btn btn_toggle" aria-pressed="true">
          <span className="visuallyHidden">Show </span>
          <span>all</span>
          <span className="visuallyHidden"> tasks</span>
        </button>
        <button type="button" className="btn btn_toggle" aria-pressed="false">
          <span className="visuallyHidden">Show </span>
          <span>Active</span>
          <span className="visuallyHidden"> tasks</span>
        </button>
        <button type="button" className="btn btn_toggle" aria-pressed="false">
          <span className="visuallyHidden">Show </span>
          <span>Completed</span>
          <span className="visuallyHidden"> tasks</span>
        </button>
      </div>

      <ul
        role="list"
        className="todoList"
        aria-labelledby="listHeading">
        {taskList.map((task) => (
          <Todo
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </main>
  )
}