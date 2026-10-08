export default function toggleTodo(todos, todoId) {
    todos = todos.map((todo) => {
        if (todo.id === todoId) {
            return { ...todo, completed: !todo.completed };
        }

        return todo;
    });

    return todos;
}
