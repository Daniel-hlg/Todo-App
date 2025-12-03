export const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Función GET -> obtener todos
export async function fetchTodos() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Error al obtener los todos");
  }

  return await res.json();
}

// Función POST -> crear un todo nuevo
export async function createTodo(titulo) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titulo,
      completed: false,
      userId: 1,
    }),
  });

  if (!res.ok) {
    throw new Error("Error al crear el todo");
  }

  return await res.json();
}

// Función PATCH -> cambiar estado (completado / pendiente)
export async function toggleTodo(id, newStatus) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: newStatus,
    }),
  });

  if (!res.ok) {
    throw new Error("Error al actualizar el todo");
  }

  return await res.json();
}

// Función DELETE -> eliminar todo
export async function deleteTodo(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Error al eliminar el todo");
  }

  return true;
}