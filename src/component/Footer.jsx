import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../css/Footer.css";
import logo from "../assets/logo.jpg"; // ✅ import logo

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Sharp Class Plus Logo" />
            <h2>Sharp Class Plus</h2>
          </div>
          <p>
            Empowering students with quality education, practical learning,
            and career-focused courses.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* COURSES (UPDATED ✅) */}
        <div className="footer-section">
          <h3 className="footer-heading">Courses</h3>
          <ul>
            <li>Engineer Preparation</li>
            <li>Sub Engineer Course</li>
            <li>Assistant Sub Engineer</li>
            <li>Weekly & Monthly Test</li>
            <li>crash courses</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>

          <p><FaMapMarkerAlt /> Kathmandu, Nepal</p>
          <p><FaPhoneAlt /> 9800000000</p>
          <p><FaEnvelope /> info@sharpclass.com</p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Sharp Class Plus. All rights reserved.
      </div>
    </footer>
  );
}