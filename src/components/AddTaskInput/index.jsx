import { useState } from 'react';

import './AddTaskInput.css';


export default function AddTaskInput({ onAddTask }) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (newTask.trim() === '') {
            alert('Você deve digitar alguma tarefa');
        } else {
            onAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <form className='add-task' onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Type a task'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} 
            id='task-input'
            />
            
            <button type="submit" id='add-task-button'>
                <i className='bi bi-plus-lg'></i>
            </button>
        </form>
    );
}
