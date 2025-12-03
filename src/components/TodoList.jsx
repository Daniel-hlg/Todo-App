import TodoItem from "./TodoItem";

export default function TodoList({ todos = [], onToggle, onDelete }) {
  if (!todos || todos.length === 0) {
    return <div className="card"><p>No hay todos para mostrar.</p></div>;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          marcar={onToggle}
          eliminar={onDelete}
        />
      ))}
    </div>
  );
}