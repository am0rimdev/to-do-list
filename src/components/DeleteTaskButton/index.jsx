import './DeleteTaskButton.css';


export default function DeleteTaskButton({ onDeleteTask }) {
    return (
        <button className='trash-button' onClick={onDeleteTask}>
            <i className='bi bi-trash'></i>
        </button>
    );
}
