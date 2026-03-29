import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section">
          <h2 className="footer-title">Sharp Class Plus</h2>
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

        {/* COURSES */}
        <div className="footer-section">
          <h3 className="footer-heading">Courses</h3>
          <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Computer Basics</li>
            <li>Accounting</li>
            <li>Programming</li>
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