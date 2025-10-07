import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 text-black">
        <Sidebar />
        <main className="flex-1 p-6 md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/habits" element={<Habits />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



