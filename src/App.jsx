import { useState } from "react";

function App() {
  // Estados independientes
  const [studyTitle, setStudyTitle] = useState("");
  const [thoughtTitle, setThoughtTitle] = useState("");

  const [studyTasks, setStudyTasks] = useState([]);
  const [thoughtTasks, setThoughtTasks] = useState([]);

  // Funciones para agregar
  const addStudyTask = (e) => {
    e.preventDefault();
    if (!studyTitle.trim()) return;
    setStudyTasks([
      ...studyTasks,
      { id: Date.now(), title: studyTitle, done: false }
    ]);
    setStudyTitle("");
  };

  const addThoughtTask = (e) => {
    e.preventDefault();
    if (!thoughtTitle.trim()) return;
    setThoughtTasks([
      ...thoughtTasks,
      { id: Date.now(), title: thoughtTitle, done: false }
    ]);
    setThoughtTitle("");
  };

  // Funciones toggle
  const toggleStudyTask = (id) => {
    setStudyTasks(
      studyTasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const toggleThoughtTask = (id) => {
    setThoughtTasks(
      thoughtTasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // Funciones borrar
  const clearStudyTasks = () => setStudyTasks([]);
  const clearThoughtTasks = () => setThoughtTasks([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "20px",
        padding: "20px",
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "url('https://www.craftmaniacos.com/wp-content/uploads/2021/01/DramaticSkys2-1024x576.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        overflow: "auto"
      }}
    >
      {/* 📚 Study Tracker */}
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "rgba(51, 191, 234, 0.6)",
          padding: "20px",
          borderRadius: "12px"
        }}
      >
        <h1>📚👀 My Amazing Study Tracker</h1>
        <h3>This is my first adventure, enjoy it!</h3>
        <p>Tienes {studyTasks.filter((t) => !t.done).length} tareas pendientes</p>

        <form
          onSubmit={addStudyTask}
          style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
        >
          <input
            value={studyTitle}
            onChange={(e) => setStudyTitle(e.target.value)}
            placeholder="Desarrolla una tarea para cumplir ..."
            required
            style={{ flex: 1, padding: "8px" }}
          />
          <button type="submit" style={{ padding: "8px 12px" }}>
            Agregar
          </button>
        </form>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {studyTasks.map((t) => (
            <li
              key={t.id}
              onClick={() => toggleStudyTask(t.id)}
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
          onClick={clearStudyTasks}
          style={{ marginTop: "10px", padding: "8px 12px" }}
        >
          Borrar todas
        </button>
      </div>

      {/* 🧠 THESE ARE MY THOUGHTS */}
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "rgba(201, 94, 23, 0.6)",
          padding: "20px",
          borderRadius: "12px"
        }}
      >
        <h1>🧠☁️ My incredible thoughts</h1>
        <h3>THESE ARE MY CURRENT IDEAS THAT I EXPECT TO ACCOMPLISH ...</h3>
        <p>Tienes {thoughtTasks.filter((t) => !t.done).length} ideas pendientes</p>

        <form
          onSubmit={addThoughtTask}
          style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
        >
          <input
            value={thoughtTitle}
            onChange={(e) => setThoughtTitle(e.target.value)}
            placeholder="Escribe tu idea ..."
            required
            style={{ flex: 1, padding: "8px" }}
          />
          <button type="submit" style={{ padding: "8px 12px" }}>
            Agregar
          </button>
        </form>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {thoughtTasks.map((t) => (
            <li
              key={t.id}
              onClick={() => toggleThoughtTask(t.id)}
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
          onClick={clearThoughtTasks}
          style={{ marginTop: "10px", padding: "8px 12px" }}
        >
          Borrar todas
        </button>
      </div>

          {/* 🧠 THESE ARE MY COURSES */}
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "rgba(241, 23, 176, 0.6)",
          padding: "20px",
          justifyContent: "center",
          borderRadius: "12px",
          gap: "30px",
        }}
      >
        <h1>MY COURSES</h1>
        <h3>MY PRINCIPLE LIST 8TH SEPTEMBER ....</h3>
        <ol>
          <li>SOFTWARE ENGINEERING</li>
          <li>COMPUTER ARQUITECTURE</li>
          <li>TECHNIQUE ENGLISH II</li>
          <li>IMAGE PROCESSING</li>
          <li>RESEARCH, DEVELOPMENT AND INNOVATION</li>
          <li>ASSISTED COMPUTER DESIGN</li>
        </ol>
        


        <ul style={{ listStyle: "none", padding: 0 }}>
          {thoughtTasks.map((t) => (
            <li
              key={t.id}
              onClick={() => toggleThoughtTask(t.id)}
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
      </div>
    </div>
  );
}

export default App;
