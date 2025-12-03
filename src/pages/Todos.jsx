import { useEffect, useState } from "react";
import { fetchTodos } from "../Api";
import Loader from "../components/Loader";
import TodoList from "../components/TodoList";

export default function Todos({ todos, setTodos }) {
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    
    if (todos.length > 0) {
      setCargando(false);
      return;
    }

    const cargar = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  const marcar = (id) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const eliminar = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  if (cargando) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app-container">
      <div className="card">
        <h1>Lista de todos</h1>

        <TodoList todos={todos} onToggle={marcar} onDelete={eliminar} />
      </div>
    </div>
  );
}