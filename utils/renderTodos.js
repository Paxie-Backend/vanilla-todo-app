import toggleTodo from './toggleTodo.js';
import deleteTodo from './deleteTodo.js';
import formatTaskDate from './formatTaskDate.js';
import isTodoOverdue from './isTodoOverdue.js';

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

        const todoText = document.createElement('span');
        todoText.textContent = todo.text;
        todoText.classList.add('task-text');

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

        const todoDate = document.createElement('span');
        todoDate.classList.add('task-date');
        todoDate.textContent = `Created: ${formatTaskDate(todo.createdAt)}`;

        const dueDateElement = document.createElement('span');
        dueDateElement.classList.add('task-due-date');

        if (todo.dueDate) {
            dueDateElement.textContent = `Due: ${formatTaskDate(todo.dueDate + 'T00:00:00')}`;
        } else {
            dueDateElement.textContent = 'No deadline';
        }

        if (isTodoOverdue(todo)) {
            dueDateElement.classList.add('overdue');
            dueDateElement.textContent += ' — Overdue';
        }

        const todoDetails = document.createElement('div');
        todoDetails.classList.add('task-details');
        todoDetails.append(todoText, todoDate, dueDateElement);

        liElement.append(checkbox, todoDetails, priority, deleteBtn);

        todo.completed ? doneList.appendChild(liElement) : todoList.appendChild(liElement);
    });
}
