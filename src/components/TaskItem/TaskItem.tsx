import React from 'react';
import './TaskItem.css'

export const TaskItem = ({task, toggleComplete, deleteTodo, editTodo}) => {
   return (
    <div className='item'>
    
        <input type="checkBox" onClick={() => toggleComplete(task.id)}/>
        <p className={`${task.completed ? 'completed' : "list-item"}`}> {task.task} </p>
        <div>
            <button className='btn-edit' onClick={() => editTodo(task.id)}>Editar</button>
            <button className='btn-delete' onClick={() => deleteTodo(task.id)}>Deletar</button>
        </div>
</div>
   )
}