import './EditTaskButton.css';


export default function EditTaskButton({ onEditTask }) {
    return (
        <button className='edit-button' onClick={onEditTask}>
            <i className='bi bi-pen'></i>
        </button>
    );
}
