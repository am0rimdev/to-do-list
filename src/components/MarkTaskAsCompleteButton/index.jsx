import './MarkTaskAsCompleteButton.css';


export default function MarkTaskAsCompleteButton({ task, onToggleComplete }) {
    return (
        <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className='mark-task-as-complete-button'
        />
    );
}
