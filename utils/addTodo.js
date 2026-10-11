export default function addTodo(text, todos, priority, dueDate = null) {
    const newTodo = {
        id: crypto.randomUUID(),
        text: text.trim(),
        priority: priority,
        completed: false,
        createdAt: new Date().toISOString(),
        dueDate: dueDate,
    };

    return [...todos, newTodo];
}
