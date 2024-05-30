export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key="todo.id">
            <span>{todo.title}</span>
            <span>{todo.description}</span>
            <input
              type="checkbox"
              checked={todo.finished}
              onChange={() => {
                /* Handle checkbox change here */
              }}
            />
            <label htmlFor={todo.id}>
              {todo.finished ? "Task Completed" : "Mark as Complete"}
            </label>
          </div>
        );
      })}
    </div>
  );
}
