import React, { useState } from 'react';
import s from './todoitem.module.css';

function Todoitem({ todo, index, onChange }) {
    return (
        <li className={s.item}>
            <span className={todo.completed ? s.done : ''}>
                <input type="checkbox" onChange={() => onChange(todo.id)} />
                <strong>{index + 1}</strong> 
                {todo.title}
            </span>
        <button className={todo.completed ? s.check : s.cross}>
            {todo.completed ? "✓" : "×"}
        </button>
        </li>
    )
}

export default Todoitem
