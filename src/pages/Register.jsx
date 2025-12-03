import { useState } from "react";
import { createTodo } from "../Api";
import { useNavigate } from "react-router-dom";

export default function Registro({ agregarTodo }) {
  const [titulo, setTitulo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const enviar = async (e) => {
    e.preventDefault();

    if (titulo.trim() === "") {
      setMensaje("El título es obligatorio");
      return;
    }

    const nuevo = {
      id: crypto.randomUUID(),   
      title: titulo,
      completed: false,
      userId: 1
    };

    agregarTodo(nuevo);

    
    setTitulo("");
    setMensaje("Registrado correctamente ✔");

    setTimeout(() => {
      navigate("/todos");
    }, 600);
  };

  return (
    <div className="app-container card">
      <h1>Registrar nuevo TODO</h1>

      <form onSubmit={enviar}>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Escribe tu tarea"
        />

        <button className="btn" type="submit">
          Registrar
        </button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}