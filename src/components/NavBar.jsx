import { Search, Handbag } from "lucide-react";
import WastraLogo from "../assets/wastra.webp";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="top-nav">
        <span>
          <Search />
        </span>
        <img src={WastraLogo} alt="Wastra Logo" style={{ width: "250px" }} />
        <span>
          <Handbag />
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
