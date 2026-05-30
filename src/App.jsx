import { Smile, Zap, Rocket } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavLink from "./components/NavLink";
import Foot from "./components/Foot";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <NavBar />
        <NavLink />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Foot />
      </div>
    </BrowserRouter>
  );
}

export default App;
