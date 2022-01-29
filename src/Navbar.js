import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./AppProvider";
const Navbar = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <nav className="nav">
      <Link to="/" className="link">
        <h2 className="nav-title">The MovieDB</h2>
      </Link>

      <button className="btn-icon" onClick={() => toggleTheme()}>
        {theme === "light-theme" ? (
          <FaMoon className="icon" />
        ) : (
          <FaSun className="icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
