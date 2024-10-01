import MarkTaskAsCompleteButton from '/src/components/MarkTaskAsCompleteButton';
import EditTaskButton from '/src/components/EditTaskButton';
import DeleteTaskButton from '/src/components/DeleteTaskButton';

import './Task.css';


export default function Task({ task, onDeleteTask, onEditTask, onToggleComplete }) {
    return (
        <li className='item'>
            <div className='task-section'>
                <MarkTaskAsCompleteButton 
                task={task}
                onToggleComplete={onToggleComplete}
                />
                <p className='task-name'>{task.text}</p>
            </div>

            <div className='task-section'>
                <EditTaskButton onEditTask={() => onEditTask(task.id)} />
                <DeleteTaskButton onDeleteTask={() => onDeleteTask(task.id)} />
            </div>
        </li>
    );
}
