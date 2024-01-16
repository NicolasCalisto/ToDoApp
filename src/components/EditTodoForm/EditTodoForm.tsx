import React, {useState} from 'react';
import '../NewTask/newTask.css'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleAddClick = e => {
        e.preventDefault();

        editTodo(value, task.id)
        setValue("");
    };

   return (
    <div className='form-group'>
    <input 
        type="text" 
        className='toDo-input' 
        placeholder='Editar Tarefa'
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
    <button onClick={handleAddClick} className='btn-add'>Atualizar</button>

</div>
   )
}