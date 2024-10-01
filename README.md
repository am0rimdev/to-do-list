
# To-Do List em React
<br>


## Objetivo
O objetivo desse projeto é permitir que uma pessoa gerencie suas tarefas em um site. O usuário vai conseguir realizar as seguintes ações:
- Adicionar tarefa.
- Editar tarefa.
- Deletar tarefa.
- Marcar tarefa como concluída.
<br>


## Instalação dos softwares necessários
Antes de começar, você precisará instalar algumas ferramentas básicas para o desenvolvimento em React.
- Node JS
    Para trabalhar com o react, é necessário que você instale o node js em sua máquina. Você pode baixá-lo no site oficial na página de downloads: https://nodejs.org/en/download/package-manager. Esse link vai te levar a uma página com opções de escolher a versão do node js, o sistema operacional em que você está instalando o node e alguns gerenciadores de pacotes. Então é importante que você selecione as opções de acordo com suas preferências e necessidades e siga todos os passos de instalação.
    ![alt text](/public/readme-images/download-nodejs.png)

    Uma opção mais fácil é baixar o arquivo msi do node, na página inicial do site.
    ![alt text](/public/readme-images/download-nodejs-pagina-inicial.png)

- IDE
    Também é importante que você tenha uma IDE para editar o seu código. Existem várias IDEs por ai, mas a mais recomendada e utilizada é o Visual Studio Code, que pode ser baixado no seguinte link: https://code.visualstudio.com/.
<br>


## Passo-a-Passo para o desenvolvimento
### Passo 01: Instalação do React usando o Vite
Vamos utilizar o vite para instalar o react. Para fazer a instalação, abra seu editor VScode (Visual Studio Code) e abra um novo terminal. Para fazer isso, clique nos três pontos brancos na área superior esquerda da tela e selecione “Terminal” e “New Terminal” ou apenas aperte `Ctrl + Shift + '`.
![alt text](/public/readme-images/open-terminal.png)

Isso vai abrir um terminal na parte inferior do VS Code.
![alt text](/public/readme-images/terminal-open.png)

Depois de aberto o terminal, navegue para a pasta do seu projeto usando o `cd <caminho-do-projeto>`, digite `npm create vite@latest .` e pressione Enter.
![alt text](/public/readme-images/create-vite.png)

Esse comando vai criar o projeto com a versão mais atual do vite. O `.` no final do comando significa que o Vite será configurado no diretório atual, utilizando o nome do diretório como o nome do projeto.

Depois de executado o comando, será pedido para você dar um nome do pacote. Aqui você pode escolher algum nome de sua preferência ou apenas apertar Enter para utilizar o nome já atribuido automaticamente.
![alt text](/public/readme-images/create-vite-package-name.png)

Após ter dado um nome ao pacote e apertado Enter, é a hora de escolher o framework que queremos. Use as teclas de seta para mover para cima e para baixo e aperte Enter na opção desejada. Aqui vamos escolher o React.
![alt text](/public/readme-images/choose-framework.png)

Em seguida, você precisa escolher a variação do framework que foi escolhido, ou seja, do React. Aqui vamos escolher a opção de apenas JavaScript para selecionar a configuração padrão do React com JavaScript. Essa variante usa JavaScript puro.
![alt text](/public/readme-images/select-variant.png)

Depois de escolhido a variante, serão gerados vários arquivos e diretórios na sua pasta atual. Mas ainda não terminamos, precisamos instalar as dependências do projeto. Para isso, digite no terminal o comando `npm install` e pressione Enter.
![alt text](/public/readme-images/npm-install.png)

Pronto, temos nosso projeto. Vamos iniciar o nosso serivor para ver se tudo está funcionando corretamente. Para fazer isso, é só digitar o comando `npm run dev` no terminal e pressionar Enter.
![alt text](/public/readme-images/npm-run-dev.png)

Agora é só acessar o link do localhost que podemos ver uma interface que é criada ao utilizar o vite para a criação do projeto.
![alt text](/public/readme-images/localhost-link.png)
![alt text](/public/readme-images/vite-project-interface.png)

Agora podemos começar a trabalhar no nosso projeto.


### Passo 02: Estruturação do projeto
O vite já criou uma estrutura básica de arquivos e diretórios para a gente. Vamos mexer primeiro no arquivo `index.html` na pasta root do projeto. Vamos remover a linha 5, trocar o titúlo da página e adicionar um link para o bootstrap para a gente usar alguns ícones no projeto.

Antes:
![alt text](/public/readme-images/index-html-antes.png)

Depois:
![alt text](/public/readme-images/index-html-depois.png)

Agora vamos editar a pasta `src`. O vite já criou alguns arquivos nessa pasta e um diretório chamado `assets`. Vamos apagar esse diretório pois não vamos utilizá-lo e excluir todo o conteúdo de `App.css`, `App.jsx` e `index.css`. Veja que é apenas excluir o conteúdo do arquivo, e não a exclusão do arquivo em si. Pra fazer isso, basta entrar em cada arquivo, selecionar todo o conteúdo e apagá-lo. O arquivo `App.css` é a estilização de `App.jsx`, e o `index.css` é a estilização globlal da aplicação.

Depois de ter apagado o conteúdo dos arquivos, vamos agora criar uma pasta chamada `components` dentro da pasta `src` para que possamos criar e organizar os componentes que usaremos em nosso projeto.

![alt text](/public/readme-images/criacao-pasta-components.png)

Dentro dessa pasta `components` vamos criar os seguintes componentes:
- AddTaskInput/
- DeleteTaskButton/
- EditTaskButton/
- MarkTaskAsCompleteButton/
- Task/
- TaskList/

A estruturação no seu VS Code fiacará da seguinte forma:

![alt text](/public/readme-images/estruturacao-componentes-pasta-components.png)

Agora, em cada componente, nós teremos dois arquivos, um arquivo `index.jsx`, onde criaremos o código jsx e um arquivo com o nome do componente e extensão .css: `<nome-componente>.css` onde ficará a estilização do componente específico. Segue um exemplo:
![alt text](/public/readme-images/exemplo-estruturaca-componente.png)


### Passo 03: Criação do código dos componentes e estilizações
Depois de criado cada componente e os arquivos `index.jsx` e `<nome-componente>.css` para cada componente, é a hora de criarmos o código e estilização do nosso projeto. Primeiro, vamos criar a estilização do `index.css`, que é a estilização global do projeto e depois criaremos o código jsx de cada componente e sua estilização.

##### `index.css`
![alt text](/public/readme-images/estilizacao-index-css.png)

#### Componente AddTaskInput
##### `index.jsx`
```jsx
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
```

##### `AddTaskInput.css`
```css
.add-task {
    display: flex;
    flex-direction: row;
    width: auto;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
}

#task-input {
    height: 4rem;
    width: 90%;
    padding: 0.6rem;
    border: none;
    border-radius: 0.4rem;
    font-size: 1.4em;
}

#add-task-button {
    height: 3.8rem;
    width: 3.8rem;
    text-align: center;
    background-color: var(--primary-font-color);
    color: var(--secondary-font-color);
    border: none;
    border-radius: 0.4rem;
}

#add-task-button i {
    font-size: 2em;
}
```


#### Componente DeleteTaskButton
##### `index.jsx`
```jsx
import './DeleteTaskButton.css';


export default function DeleteTaskButton({ onDeleteTask }) {
    return (
        <button className='trash-button' onClick={onDeleteTask}>
            <i className='bi bi-trash'></i>
        </button>
    );
}
```

##### `DeleteTaskButton.css`
```css
.trash-button {
    background: none;
    border: none;
    height: 1.5em;
    width: 1.5em;
    color: red;
    border-radius: 0.2rem;
}

.bi-trash {
    font-size: 1.5em;
}
```


#### Componente EditTaskButton


#### Componente MarkTaskAsCompleteButton


#### Componente Task


#### Componente TaskList


#### App
O `App.jsx` vai conter o "core" da nossa aplicação, esse arquivo que vai conter os componentes AddTaskInput e o TaskList, e é nesse arquivo que as funções de salvamento no localStorage, adicionar, editar, deletar e marcar tarefa como concluída vão estar. Essa foi a forma que eu resolvi estruturar o projeto, mas há várias outras maneiras que você pode escolher utilizar.

##### `App.jsx`
```jsx
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
```

##### `App.css`
![alt text](/public/readme-images/arquivo-app-css.png)


### Passo 04: Execução do projeto
Depois de ter criado todo o código e estilizado ele, temos o nosso projeto completo. Agora é só executar usando o comando `npm run dev` e abrir o link do localhost que aparecer no terminal e usar o site para gerencias suas tarefas.

<br>

## Resultados alcançados
Como resultado obtivemos um website de gerenciamento de tarefas, no qual o usuário consegue criar, editar, deletar e marcar tarefas como concluídas.
![alt text](/public/readme-images/resultado-alcancado.png)

<br>

## Materiais utilizados para o desenvolvimento
- https://react.dev/learn
- https://react.dev/reference/react
