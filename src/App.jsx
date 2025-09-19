import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTasks([...tasks, { id: Date.now(), title, done: false }]);
    setTitle("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const clearTasks = () => setTasks([]);

  return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1350&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff"
    }}
  >
    <div
      style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "rgba(124, 27, 105, 0.6)",
        padding: "20px",
        borderRadius: "12px"
      }}
    >
      <h1>📚 My amazing Study Tracker</h1>
      <h3>This is my first adventure, enjoy it!</h3>
      <p>Tienes {tasks.filter(t => !t.done).length} tareas pendientes</p>

      <form
        onSubmit={addTask}
        style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe tu tarea a cumplir ..."
          required
          style={{ flex: 1, padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Agregar
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li
            key={t.id}
            onClick={() => toggleTask(t.id)}
            style={{
              cursor: "pointer",
              textDecoration: t.done ? "line-through" : "none",
              opacity: t.done ? 0.6 : 1,
              background: "#1e293b",
              color: "#e2e8f0",
              margin: "5px 0",
              padding: "8px",
              borderRadius: "6px"
            }}
          >
            {t.title}
          </li>
        ))}
      </ul>

      <button
        onClick={clearTasks}
        style={{ marginTop: "10px", padding: "8px 12px" }}
      >
        Borrar todas
      </button>
    </div>

    <div
      style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "rgba(124, 27, 105, 0.6)",
        padding: "20px",
        borderRadius: "12px"
      }}
    >
      <h1>📚 My amazing Study Tracker</h1>
      <h3>This is my first adventure, enjoy it!</h3>
      <p>Tienes {tasks.filter(t => !t.done).length} tareas pendientes</p>

      <form
        onSubmit={addTask}
        style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe tu tarea a cumplir ..."
          required
          style={{ flex: 1, padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Agregar
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li
            key={t.id}
            onClick={() => toggleTask(t.id)}
            style={{
              cursor: "pointer",
              textDecoration: t.done ? "line-through" : "none",
              opacity: t.done ? 0.6 : 1,
              background: "#1e293b",
              color: "#e2e8f0",
              margin: "5px 0",
              padding: "8px",
              borderRadius: "6px"
            }}
          >
            {t.title}
          </li>
        ))}
      </ul>

      <button
        onClick={clearTasks}
        style={{ marginTop: "10px", padding: "8px 12px" }}
      >
        Borrar todas
      </button>
    </div>
  </div>
);
}
export default App;
