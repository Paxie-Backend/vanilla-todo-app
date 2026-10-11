export default function toggleTodo(todos, todoId) {
    return todos.map((todo) => {
        if (todo.id === todoId) {
            return { ...todo, completed: !todo.completed };
        }

        return todo;
    });
}
