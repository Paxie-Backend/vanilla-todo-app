import addTodo from './utils/addTodo.js';
import loadTodos from './utils/loadTodos.js';
import renderTodos from './utils/renderTodos.js';
import saveTodos from './utils/saveTodos.js';

let todos = loadTodos();

const taskForm = document.getElementById('task-form');
const deleteAllBtn = document.getElementById('delete-all-btn');
const dueDateInput = document.getElementById('task-due-date');

function updateTodos(nextTodos) {
    todos = nextTodos;
    saveTodos(todos);
    renderTodos(todos, updateTodos);
}

renderTodos(todos, updateTodos);

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textAreaElement = e.target.children[0];
    const selectElement = e.target.children[2];

    if (textAreaElement.value.trim() === '') {
        return;
    }
    console.dir(e);

    updateTodos(addTodo(textAreaElement.value, todos, selectElement.value, dueDateInput.value));

    textAreaElement.value = '';
    dueDateInput.value = '';
});

deleteAllBtn.addEventListener('click', () => {
    todos = [];
    updateTodos(todos);
});
