import createTodo from './utils/createTodo.js';

const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('createTask');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (taskInput.value.trim() === '') {
        return;
    }

    todoList.appendChild(createTodo(taskInput.value));
});
