import React, {useState} from 'react';
import './newTask.css'

export const NewTask = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleAddClick = e => {
        e.preventDefault();

        addTodo(value)
        setValue("");
    };

   return (
    <div className='form-group'>
    <input 
        type="text" 
        className='toDo-input' 
        placeholder='Nova Tarefa'
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
    <button onClick={handleAddClick} className='btn-add'>+</button>

</div>
   )
}