export default function completeTodo(checkBox, liElement) {
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');

    if (checkBox.checked) {
        checkBox.nextSibling.classList.add('completed-todo');
        completedList.appendChild(liElement);
    } else {
        checkBox.nextSibling.classList.remove('completed-todo');
        todoList.appendChild(liElement);
    }
}
