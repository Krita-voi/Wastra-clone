import { Link } from "react-router-dom";
import WastraLogo from "../assets/wastra.webp";
import "../css/Foot.css";

const aboutLinks = [{ label: "About us", path: "/about" }];

const shopLinks = [
  { label: "T-Shirts", path: "/collections/tshirt" },
  { label: "Top Wear", path: "/collections/" },
  { label: "Bottom Wear", path: "/collections/bottomwear" },
  { label: "Accessories", path: "/collections/accessories" },
];

function Foot() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={WastraLogo} alt="Wastra." style={{ width: "350px" }} />
        </div>
        <div className="footer-columns">
          <div className="footer-cols">
            <h3> ABOUT </h3>
            {aboutLinks.map((item) => (
              <Link key={item.label} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-cols">
            <h3> LOCATION</h3>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="footer-cols">
            <h3> SHOP NOW</h3>
            {shopLinks.map((item) => (
              <Link key={item.label} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-cols">
            <h3> CONTACT</h3>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Wastra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Foot;
