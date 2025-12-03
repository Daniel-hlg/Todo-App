export default function Todoitem({ todo, marcar, eliminar }) {
  return (
    <div className={`todo-item card ${todo.completed ? "completed" : ""}`}>
      <div className="todo-main">
        <div>
          <div className="todo-title">{todo.title}</div>
          <div className="todo-meta">ID: {todo.id} • User: {todo.userId ?? "-"}</div>
        </div>
      </div>

      <div className="todo-actions">
        <button
          className="icon-btn"
          onClick={() => marcar(todo.id)}
          title={todo.completed ? "Marcar como pendiente" : "Marcar como completado"}
        >
          {todo.completed ? "↺" : "✔"}
        </button>

        <button
          className="icon-btn"
          onClick={() => eliminar(todo.id)}
          title="Eliminar todo"
        >
          🗑
        </button>
      </div>
    </div>
  );
}