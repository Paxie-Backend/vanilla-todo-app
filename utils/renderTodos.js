import toggleTodo from './toggleTodo.js';
import saveTodos from './saveTodos.js';

export default function renderTodos(todos) {
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');

    todoList.replaceChildren();
    completedList.replaceChildren();

    for (const todo of todos) {
        const liElement = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            toggleTodo(todos, todo.id);
            saveTodos(todos);
            renderTodos(todos);
        });

        const spanElement = document.createElement('span');
        spanElement.textContent = todo.text;

        liElement.append(checkbox, spanElement);

        if (todo.completed) {
            spanElement.classList.add('completed-todo');
            todoList.append(liElement);
        } else {
            completedList.append(liElement);
        }
    }
}
