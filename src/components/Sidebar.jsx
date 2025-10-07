import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", name: "Dashboard" },
    { path: "/habits", name: "Hábitos" },
    { path: "/goals", name: "Metas" },
    { path: "/settings", name: "Configuración" },
  ];

  return (
    <>
      {/* Botón hamburguesa móvil */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white shadow-md md:hidden"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 flex flex-col transition-transform duration-300 z-40 shadow-lg
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-400">
          Study Tracker 📘
        </h2>

        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                location.pathname === link.path
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-600/30 hover:text-blue-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Fondo oscuro móvil */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
