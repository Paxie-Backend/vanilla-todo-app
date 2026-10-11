import toggleTodo from './toggleTodo.js';
import deleteTodo from './deleteTodo.js';

export default function renderTodos(todos, onTodosChange) {
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');

    todoList.replaceChildren();
    doneList.replaceChildren();

    todos.forEach((todo) => {
        const liElement = document.createElement('li');

        liElement.classList.add('task-item');
        liElement.dataset.id = todo.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.classList.add('task-checkbox');

        checkbox.addEventListener('change', () => {
            onTodosChange(toggleTodo(todos, todo.id));
        });

        const tasktext = document.createElement('span');
        tasktext.textContent = todo.text;
        tasktext.classList.add('task-text');

        const priority = document.createElement('span');
        priority.textContent = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);

        priority.classList.add('task-priority', `priority-${todo.priority}`);

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', () => {
            onTodosChange(deleteTodo(todos, todo.id));
        });

        liElement.append(checkbox, tasktext, priority, deleteBtn);

        todo.completed ? doneList.appendChild(liElement) : todoList.appendChild(liElement);
    });
}
