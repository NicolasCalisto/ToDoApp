import React, { useState } from 'react'
import Button from '../../components/CleanAllButton/CleanAllButton.tsx';
import './Main.css'
import AddButton from '../../components/AddButton/AddButton.tsx';

const Main: React.FC = () => {
    const [inputValue, setinputValue] = useState("");
    const [toDoList, setToDoList] = useState<string[]>([]);

    const handleAddClick = () => {
        setToDoList([
            ...toDoList, inputValue
        ])
    };

    const handleClear = () => {
        setToDoList([])
    }

    // const handleEdit = (index: number) => {}
    // const handleDelete = (index: number) => {}

    return (
    <div className='container'>
        <h1 className='title'>Lista de Tarefas</h1>
        <div className='form-group'>
            <input 
                type="text" 
                className='toDo-input' 
                placeholder='Nova Tarefa'
                value={inputValue}
                onChange={(event) => setinputValue(event.target.value)}

            />
            <AddButton onClick={handleAddClick}></AddButton>
        </div>
        <div className='toDo-list'>
            <ul>
                {toDoList.map((toDo) => (
                    <>
                        {/* <button className='btn-complete'>feito</button> */}
                        <li className='list-item'>{toDo}</li>
                        {/* <button className='btn-edit'>Editar</button>
                        <button className='btn-delete'>Deletar</button> */}
                    </>
                ))}
            </ul>
        </div>
        <div className='bottom'>
           <p className='task-length'>
                Você tem {toDoList.length} tarefas pendentes
            </p>
            <Button onClick={handleClear}></Button>
        </div>
    </div>
    )
}

export default Main;