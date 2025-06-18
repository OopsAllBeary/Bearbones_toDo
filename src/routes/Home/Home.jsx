import React, { useEffect, useState } from 'react'


export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

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
        <li className="todo">
          <div className="todoContent">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todoLabel" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visuallyHidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visuallyHidden">Eat</span>
            </button>
          </div>
        </li>
      </ul>
    </main>
  )
}