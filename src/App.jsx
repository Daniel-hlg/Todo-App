import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Registro from "./pages/Register";

export default function App() {

  // Estado GLOBAL de la aplicación
  const [todos, setTodos] = useState([]);

  // Función para agregar un nuevo TODO
  const agregarTodo = (nuevo) => {
    setTodos(prev => [...prev, nuevo]);
  };

  // Actualizar lista completa (cuando cargamos desde la API)
  const setListaCompleta = (lista) => {
    setTodos(lista);
  };

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Link to="/">Inicio</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/registro">Registrar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos todos={todos} setTodos={setListaCompleta} />} />
        <Route path="/registro" element={<Registro agregarTodo={agregarTodo} />} />
      </Routes>
    </BrowserRouter>
  );
}