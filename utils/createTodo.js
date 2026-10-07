import completeTodo from './completeTodo.js';

export default function createTodo(taskInput) {
    const newTask = document.createElement('li');
    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';

    newCheckBox.addEventListener('change', () => {
        completeTodo(newCheckBox);
    });

    const textNode = document.createTextNode(taskInput);

    newTask.appendChild(newCheckBox);
    newTask.appendChild(textNode);

    return newTask;
}
