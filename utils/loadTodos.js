export default function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    console.log('Loaded todos from localStorage:', savedTodos);
    if (savedTodos === null) {
        return [];
    }

    return JSON.parse(savedTodos);
}
