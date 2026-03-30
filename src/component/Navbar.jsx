import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 🔥 Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      <div className="navbar-container">

        {/* 🔥 LOGO */}
        <Link to="/" className="logo">
          <img src={logo} alt="Sharp Class Plus Logo" />
          <span>Sharp Class Plus</span>
        </Link>

        {/* 🔥 DESKTOP MENU */}
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

          {/* CTA */}
          <Link to="/enroll" className="nav-btn">
            Enroll Now
          </Link>
        </div>

        {/* 🔥 MOBILE ICON */}
        <div
          className={`menu-icon ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* 🔥 MOBILE OVERLAY */}
      <div
        className={`mobile-menu ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      >

        {/* 🔥 SIDEBAR */}
        <div
          className="mobile-sidebar"
          onClick={(e) => e.stopPropagation()}
        >

          {/* 🔥 HEADER */}
          <div className="mobile-header">
            <img src={logo} alt="logo" />
            <h3>Sharp Class Plus</h3>
          </div>

          {/* 🔥 NAV LINKS + CTA (MOVED UP) */}
          <div className="mobile-links">

            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* 🚀 CTA IN MIDDLE */}
            <Link to="/enroll" className="mobile-btn">
              🚀 Enroll Now
            </Link>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>
      </div>
    </nav>
  );
}