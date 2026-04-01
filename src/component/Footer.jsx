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
import { motion } from "framer-motion";

export default function Footer() {

  // 🔥 Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="footer">

      <motion.div
        className="footer-container"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* BRAND */}
        <motion.div className="footer-section" variants={fadeUp}>
          <div className="footer-logo">
            <img src={logo} alt="Sharp Class Plus Logo" />
            <h2>Sharp Class Plus</h2>
          </div>
          <p>
            Empowering students with quality education, practical learning,
            and career-focused courses.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div className="footer-section" variants={fadeUp}>
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        {/* COURSES */}
        <motion.div className="footer-section" variants={fadeUp}>
          <h3 className="footer-heading">Courses</h3>
          <ul>
            <li>Engineer Preparation</li>
            <li>Sub Engineer Course</li>
            <li>Assistant Sub Engineer</li>
            <li>Weekly & Monthly Test</li>
            <li>Crash Courses</li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div className="footer-section" variants={fadeUp}>
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

          {/* 🔥 SOCIAL ICONS */}
          <div className="social-icons">
            <motion.a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebookF />
            </motion.a>

            <motion.a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaYoutube />
            </motion.a>

            <motion.a
              href="https://wa.me/9779804044190"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaWhatsapp />
            </motion.a>
          </div>

        </motion.div>

      </motion.div>

      {/* 🔥 BOTTOM */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © 2026 Sharp Class Plus. All rights reserved.
      </motion.div>

    </footer>
  );
}