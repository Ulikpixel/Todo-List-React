import React, { useContext } from 'react';
import s from './todoitem.module.css';
import { Context } from '../../redux/date';

function Todoitem({ todo, index, onChange }) {
    const { removeTask } = useContext(Context)

    return (
        <li className={s.item}>
            <span className={ todo.completed ? s.done : '' }>
                <input type="checkbox" onChange={() => onChange(todo.id)} />
                <strong>{ index + 1 }</strong> 
                { todo.title }
            </span>
            <button 
                className={todo.completed ? s.check : s.cross}
                onClick={removeTask.bind(null, todo.id)}
            >
                { todo.completed ? "✓" : "×" }
            </button>
        </li>
    )
}

export default Todoitem
