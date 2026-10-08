export default function loadTodos() {
    const savedTodos = localStorage.getItem('todos');

    if (!savedTodos) {
        return [];
    }

    return JSON.parse(savedTodos);
}
