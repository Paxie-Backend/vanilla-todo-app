import addTodo from './utils/addTodo.js';
import loadTodos from './utils/loadTodos.js';
import renderTodos from './utils/renderTodos.js';
import saveTodos from './utils/saveTodos.js';

let todos = loadTodos();
const todoForm = document.getElementById('todoForm');

function updateTodos(nextTodos) {
    todos = nextTodos;
    saveTodos(todos);
    renderTodos(todos, updateTodos);
}

renderTodos(todos, updateTodos);

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInputElement = e.target.children[1];

    if (taskInputElement.value.trim() === '') {
        return;
    }
    console.dir(e.target.children[1].value);

    updateTodos(addTodo(taskInputElement.value, todos));

    taskInputElement.value = '';
});
