import saveTodos from './saveTodos.js';
import renderTodos from './renderTodos.js';

export default function addTodo(text, todos) {
    const newTodo = {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
    };

    console.log(todos);
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos);
}
