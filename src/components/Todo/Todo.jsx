import React from 'react';

const Todo = (props) => {
    return (
        <li key={props.task.id} className={props.task.completed ? "todo todo--completed" : "todo"}>
            <div className="todoContent" onClick={() => props.completeTask(props.task.id)}>
                <input id={`todo-${props.task.id}`} className="visuallyHidden" type="checkbox" defaultChecked={props.task.completed} onChange={() => props.completeTask(props.task.id)}/>
                <label className="todoLabel" htmlFor={`todo-${props.task.id}`}>
                    {props.task.text}
                </label>
            </div>
            <div className="btnGroup">
                <button type="button" className="btn" aria-label={`Edit task: ${props.task.text}`} onClick={() => props.editTask(props.task.id)}>
                    Edit <span className="visuallyHidden">{props.task.text}</span>
                </button>
                <button type="button" className="btn btn__danger" aria-label={`Delete task: ${props.task.text}`} onClick={() => props.deleteTask(props.task.id)}>
                    Delete <span className="visuallyHidden">{props.task.text}</span>
                </button>
            </div>
        </li>
    );
}

export default Todo;