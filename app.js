import createTodo from './utils/createTodo.js';
import addTodo from './utils/addTodo.js';
import loadTodos from './utils/loadTodos.js';

let todos = loadTodos();
const todoForm = document.getElementById('todoForm');
const taskInputElement = document.getElementById('createTask');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (taskInputElement.value.trim() === '') {
        return;
    }

    addTodo(taskInputElement.value, todos);

    taskInputElement.value = '';
});
