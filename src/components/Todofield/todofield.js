import React, { useState } from 'react';
import s from './todofield.module.css';

function Todofield({ active, onCreate }) {
    const [value, setValue] = useState('');

    function submitHandler(e){
        e.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <div className={s.box}>
            <form onSubmit={submitHandler}>
                <input type="text" 
                       className={s.field} value={value} 
                       onChange={e => setValue(e.target.value)}
                />
                <button className={s.add} type="submit">ADD TODO</button>
            </form>
            <h2 className={ active.length === 0 ? s.done : s.active }>
                { active.length === 0 ? 'Введите новые задачи!' : `Количество задач: ${active.length}` }
            </h2>
        </div>
    )
}

export default Todofield
