import React, {useState} from 'react';
import s from './todolist.module.css';
import Todoitem from '../TodoItem/todoitem';
import todos from '../../redux/date';
import Todofield from '../Todofield/todofield';

function Todolist() {

    const [todo, setTodo] = useState(todos)

    function onToggle(id){
        setTodo(
            todo.map(todo => {
                if(todo.id === id){
                todo.completed = !todo.completed
            }
    
        return todo
        })
    )}

    const activeTodos = todos.filter(todo => !todo.completed)
    const doneTodos = todos.filter(todo => todo.completed)

    return (
        <div className={s.block}>
            <Todofield active={activeTodos} />
            <ul className={s.list}>
                { [...activeTodos, ...doneTodos].map((todo, index) => <Todoitem 
                    todo={todo} 
                    index={index} 
                    onChange={onToggle} 
                    key={todo.id} />) }
            </ul>
        </div>
    )
}

export default Todolist
