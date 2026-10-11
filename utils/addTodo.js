export default function addTodo(text, todos, priority) {
    const newTodo = {
        id: crypto.randomUUID(),
        text: text.trim(),
        priority: priority,
        completed: false,
        createdAt: new Date().toISOString(),
    };

    return [...todos, newTodo];
}
