import React, { useState } from 'react'
import './Main.css'
import { ClearButton} from '../components/Buttons/CleanAllButton/CleanAllButton.tsx';
import { NewTask } from '../components/NewTask/newTask.tsx';
import { v4 as uuidv4 } from 'uuid';
import { TaskItem } from '../components/TaskItem/TaskItem.tsx';
import { EditTodoForm } from '../components/EditTodoForm/EditTodoForm.tsx';
uuidv4();

const Main: React.FC = () => {

    const [todos, setTodos] = useState<Array<{ 
        id: string; 
        task: string; 
        completed: boolean; 
        isEditing: boolean 
    }>>([]);

    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(), 
            task: todo, 
            completed: false, 
            isEditing: false
        }]);
    }

    const handleClear = () => {
        setTodos([])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }

    return (

        <div className='container'>
            <h1 className='title'>Lista de Tarefas</h1>
            <NewTask addTodo={addTodo} />

            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <TaskItem 
                    task={todo} 
                    key={index} 
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
                )
            ))}

            <div className='bottom'>
                <p className='task-length'>
                    Você tem {todos.length} tarefas pendentes
                </p>
                <ClearButton onClick={handleClear}></ClearButton>
            </div>

        </div>
    )
}

export default Main;