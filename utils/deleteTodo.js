export default function deleteTodo(todos, todoId) {
    return todos.filter((todo) => todo.id !== todoId);
}
