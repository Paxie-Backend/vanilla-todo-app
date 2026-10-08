export default function addTodo(text, todos) {
    const newTodo = {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
    };

    return [...todos, newTodo];
}
