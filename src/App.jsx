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
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>📚 Study Tracker</h1>
      <p>Tienes {tasks.filter(t => !t.done).length} tareas pendientes</p>

      <form onSubmit={addTask} style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tema de estudio"
          required
          style={{ flex: 1, padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>Agregar</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(t => (
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

      <button onClick={clearTasks} style={{ marginTop: "10px", padding: "8px 12px" }}>
        Borrar todas
      </button>
    </div>
  );
}

export default App;
