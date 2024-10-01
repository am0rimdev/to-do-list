import './TaskList.css';

import Task from '/src/components/Task';

export default function TaskList({ tasks, onDeleteTask, onEditTask, onToggleComplete }) {
    return (
        <ul id='task-list'>
            {tasks.map((task) => (
                <Task
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
                onToggleComplete={onToggleComplete}
                />
            ))}
        </ul>
    );
}
