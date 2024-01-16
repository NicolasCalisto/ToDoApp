import React, { useState } from 'react'
import Button from '../../components/CleanAllButton/CleanAllButton.tsx';
import './Main.css'
import { NewTask } from '../../componentsCRUD/newTask.tsx';
// new task
import { v4 as uuidv4 } from 'uuid';
uuidv4();
//



const Main: React.FC = () => {
    //newTask component
    const [todos, setTodos] = useState<Array<{ id: string; task: string; completed: boolean; isEditing: boolean }>>([]);
    // const [toDoList, setToDoList] = useState<string[]>([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, 
            completed: false, isEditing: false}]);
        
        console.log(todos)
    }
    // 

    const handleClear = () => {
        setTodos([])
    }

    const handleEdit = (index) => {

    }

    const handleDelete = (index) => {
        const handleAddClick = [...todos]
        handleAddClick.splice(index, 1)
        setTodos(handleAddClick)
    }

    return (
    <div className='container'>
        <h1 className='title'>Lista de Tarefas</h1>
        <NewTask addTodo={addTodo} />
        <div className='toDo-list'>
            <ul>
                {todos.map((todo) => (
                    <>
                    <div className='item'>
                        <input type="checkbox" className='btn-complete'/>
                        <li className='list-item'>
                            {todo.task}</li>  
                        <button className='btn-edit'>Editar</button>
                        <button className='btn-delete' onClick={handleDelete}>Deletar</button>
                    </div>
                    </>
                ))}
            </ul>
        </div>
        <div className='bottom'>
            <p className='task-length'>
                Você tem {todos.length} tarefas pendentes
            </p>
            <Button onClick={handleClear}></Button>
        </div>
    </div>
    )
}

export default Main;