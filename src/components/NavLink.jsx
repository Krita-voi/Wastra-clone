import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "../css/NavLink.css";

const navItems = [
  { label: "Home", path: "/", dropdown: [] },
  {
    label: "Tees",
    path: "/collections/tees",
    dropdown: [
      { label: "Minimal", path: "/collections/minimal" },
      { label: "Front Graphic Tees", path: "/collections/front-graphic" },
      { label: "Full Graphic Tees", path: "/collections/full-graphic" },
    ],
  },
  {
    label: "Top Wears",
    path: "/collections/top-wears",
    dropdown: [
      { label: "Long Sleeves", path: "/collections/long-sleeves" },
      { label: "Jacket", path: "/collections/jacket" },
      { label: "Hoodie", path: "/collections/hoodie" },
      { label: "Sweatshirts", path: "/collections/sweatshirts" },
    ],
  },
  {
    label: "Bottoms",
    path: "/collections/bottoms",
    dropdown: [
      { label: "Jeans", path: "/collections/jeans" },
      { label: "Sweatpants", path: "/collections/sweatpants" },
    ],
  },
  { label: "Offer", path: "/offer", dropdown: [] },
  { label: "Accessories", path: "/collections/accessories", dropdown: [] },
];

function NavLink() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="nav-links">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="nav-item"
          onMouseEnter={() => setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to={item.path} className="nav-link">
            {item.label}
            {item.dropdown.length > 0 && (
              <ChevronDown size={12} className="chevron" />
            )}
          </Link>

          {activeDropdown === item.label && item.dropdown.length > 0 && (
            <div className="dropdown">
              {item.dropdown.map((sub) => (
                <Link
                  key={sub.label}
                  to={sub.path}
                  className="dropdown-item"
                  onClick={() => setActiveDropdown(null)}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavLink;
