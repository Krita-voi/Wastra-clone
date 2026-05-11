import { Smile, Zap, Rocket } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavLink from "./components/NavLink";
import Foot from "./components/Foot";

function App() {
  return (
    <div className="app-layout">
      <NavBar />
      <NavLink />
      <main className="app-main">
        <Routes></Routes>
      </main>
      <Foot />
    </div>
  );
}

export default App;
