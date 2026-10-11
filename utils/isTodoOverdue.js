export default function isTodoOverdue(todo) {
    if (!todo.dueDate || todo.completed) {
        return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(`${todo.dueDate}T00:00:00`);

    return dueDate < today;
}
