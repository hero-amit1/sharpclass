import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import logo from "../assets/logo.jpg"; // ✅ import logo

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
    { name: "Enroll", path: "/enroll" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* 🔥 LOGO */}
        <Link to="/" className="logo">
          <img src={logo} alt="Sharp Class Plus Logo" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE ICON */}
        <div
          className="menu-icon"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`mobile-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/enroll"
            onClick={() => setOpen(false)}
            className="mobile-btn"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
}