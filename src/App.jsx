import { useState, useEffect } from 'react';

import AddTaskInput from '/src/components/AddTaskInput';
import TaskList from '/src/components/TaskList';

import './App.css';


export default function App() {
	const [tasks, setTasks] = useState(() => {
		// Carregar as tasks ao iniciar a aplicação
		try {
			const savedTasks = JSON.parse(localStorage.getItem('tasks'));
			return savedTasks || [];
		} catch (error) {
			console.error('Erro ao carregar tasks do localStorage:', error);
			return [];
		}
	});
	
	// Salva as tasks no localStorage sempre que a lista de tasks mudar
	useEffect(() => {
		try {
		  	localStorage.setItem('tasks', JSON.stringify(tasks));
		} catch (error) {
		  	console.error('Erro ao salvar tasks no localStorage:', error);
		}
	}, [tasks]);
	

	// Função para adicionar uma task
	const handleAddTask = (taskText) => {
		const newTask = {
			id: Date.now(),
			text: taskText,
			completed: false,
		};
		
		setTasks([...tasks, newTask]);
	};
  

	// Função para editar uma task
	const handleEditTask = (taskId) => {
		// Encontrar a tarefa que será editada
		const taskToEdit = tasks.find((task) => task.id === taskId);
		
		// Mostrar o prompt com o texto atual da tarefa como valor inicial
		const newText = prompt('Edit your task:', taskToEdit.text);
		if (newText === null || newText.trim() === '') {
			return;
		}

		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, text: newText } : task
			)
		);
	};


	// Função para deletar uma task
	const handleDeleteTask = (taskId) => {
		const filteredTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(filteredTasks);
	};
  

	// Função para marcar task como concluída
	const handleToggleComplete = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};
  

  	return (
		<section className='app'>
			<h1 id='app-title'>To-Do List</h1>
			<AddTaskInput onAddTask={handleAddTask} />
			<TaskList 
				tasks={tasks}
				onDeleteTask={handleDeleteTask}
				onEditTask={handleEditTask}
				onToggleComplete={handleToggleComplete}
			/>
		</section>
  	)
}
