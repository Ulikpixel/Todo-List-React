import React, {useState} from 'react';
import s from './todolist.module.css';
import Todoitem from '../TodoItem/todoitem';
import todos from '../../redux/date';
import Todofield from '../Todofield/todofield';
import { Context } from '../../redux/date';

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

    function removeTask(id){
        setTodo(todo.filter(todo => todo.id !== id))
    }

    function addTodo(title){
        setTodo(
            todo.concat([
                { id: Date.now(), title, completed: false }
            ])
        )
    }

    const activeTodos = todo.filter(todo => !todo.completed)
    const doneTodos   = todo.filter(todo => todo.completed)

    return (
        <Context.Provider value={{ removeTask }}> 
            <div className={s.block}>
                <Todofield active={activeTodos} onCreate={addTodo}/>
                <ul className={s.list}>
                    { [...activeTodos, ...doneTodos].map((todo, index) => <Todoitem 
                        todo={todo} 
                        index={index} 
                        onChange={onToggle} 
                        key={todo.id} />) }
                </ul>
            </div>
        </Context.Provider>
    )
}

export default Todolist
