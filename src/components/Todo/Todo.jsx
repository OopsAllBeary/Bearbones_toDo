import React from 'react';

const Todo = (props) => {
    return (
        <li key={props.task.id} className="todo">
            <div className="todoContent">
                <input id={`todo-${props.task.id}`} type="checkbox" defaultChecked={props.task.completed} />
                <label className="todoLabel" htmlFor={`todo-${props.task.id}`}>
                    {props.task.text}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visuallyHidden">{props.task.text}</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visuallyHidden">{props.task.text}</span>
                </button>
            </div>
        </li>
    );
}

export default Todo;