import createTodo from './utils/createTodo.js';

const form = document.querySelector('form');
const taskInput = document.getElementById('createTask');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (taskInput.value.trim() === "") {
        return
    }



    taskList.appendChild(createTodo(taskInput.value));
});
