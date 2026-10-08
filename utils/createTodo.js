import completeTodo from './completeTodo.js';

export default function createTodo(taskText) {
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');
    const liElement = document.createElement('li');
    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';

    const spanElement = document.createElement('span');
    spanElement.textContent = taskText;

    liElement.appendChild(newCheckBox);
    liElement.appendChild(spanElement);

    newCheckBox.addEventListener('change', () => {
        completeTodo(newCheckBox, liElement);
    });

    todoList.appendChild(liElement);
}
