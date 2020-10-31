import React, { useState, useRef } from 'react';
import s from './todofield.module.css';
import todos from '../../redux/date';

function Todofield({ active }) {
    return (
        <div className={s.box}>
            <input type="text" className={s.field}/>
            <button className={s.add}>ADD TODO</button>
            <h2 className={active.length === 0 ? s.done : s.active}>
                {active.length === 0 ? 'Введите новые задачи!' : `Количество задач: ${active.length}`}
            </h2>
        </div>
    )
}

export default Todofield
