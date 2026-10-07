export default function completeTodo(checkBox) {
    checkBox.parentElement.classList.toggle('completed-todo', checkBox.checked);
    console.log('applied');
}
