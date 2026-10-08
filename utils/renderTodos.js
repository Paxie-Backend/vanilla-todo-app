import toggleTodo from './toggleTodo.js';
import deleteTodo from './deleteTodo.js';

export default function renderTodos(todos, onTodosChange) {
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');

    todoList.replaceChildren();
    completedList.replaceChildren();

    for (const todo of todos) {
        const liElement = document.createElement('li');
        const checkbox = document.createElement('input');
        const deleteBtn = document.createElement('button');

        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            onTodosChange(toggleTodo(todos, todo.id));
        });

        deleteBtn.type = 'button';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            onTodosChange(deleteTodo(todos, todo.id));
        });

        const spanElement = document.createElement('span');
        spanElement.textContent = todo.text;

        liElement.append(checkbox, spanElement, deleteBtn);

        if (todo.completed) {
            spanElement.classList.add('completed-todo');
            completedList.append(liElement);
        } else {
            todoList.append(liElement);
        }
    }
}
