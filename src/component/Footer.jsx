import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import logo from "../assets/logo.jpg";

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COURSES */}
        <div className="footer-section">
          <h3 className="footer-heading">Courses</h3>
          <ul>
            <li>Engineer Preparation</li>
            <li>Sub Engineer Course</li>
            <li>Assistant Sub Engineer</li>
            <li>Weekly & Monthly Test</li>
            <li>Crash Courses</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> Kathmandu, Nepal
          </p>

          <p>
            <FaPhoneAlt />
            <a href="tel:+9779804044190"> +977 9804044190</a>
          </p>

          <p>
            <FaEnvelope />
            <a href="mailto:sharpclassplus@gmail.com">
              {" "}sharpclassplus@gmail.com
            </a>
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://youtube.com/yourchannel" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>

            <a href="https://wa.me/9779804044190" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
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