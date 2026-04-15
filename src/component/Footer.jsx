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

  // 🔥 Parent stagger animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Fade animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="footer">

      <motion.div
        className="footer-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* 🔥 BRAND */}
        <motion.div className="footer-section" variants={fadeUp}>
          <div className="footer-logo">
            <img src={logo} alt="Sharp Class Plus Logo" />
            <h2>Sharp Class Plus Career Center Pvt. Ltd.</h2>
          </div>

          <p>
            Empowering students with quality education, practical learning,
            and career-focused courses.
          </p>
        </motion.div>

        {/* 🔥 QUICK LINKS */}
        <motion.div className="footer-section" variants={fadeUp}>
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Courses</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        {/* 🔥 COURSES */}
        <motion.div className="footer-section" variants={fadeUp}>
          <h3 className="footer-heading">Courses</h3>
          <ul>
            <li>Engineer Preparation</li>
            <li>Sub Engineer</li>
            <li>Assistant Sub Engineer</li>
            <li>NEC Preparation</li>
            <li>Khane Pani & sarasafai Technician</li>
          </ul>
        </motion.div>

        {/* 🔥 CONTACT */}
        <motion.div className="footer-section" variants={fadeUp}>
          <h3 className="footer-heading">Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> Biratnagar-06, Morang, Nepal
          </p>

          <p>
            <FaPhoneAlt />
            <a href="tel:+9779804044190"> +977 9804044190 , 9709025820</a>
          </p>

          <p>
            <FaEnvelope />
            <a href="mailto:sharpclassplus@gmail.com">
              {" "}sharpclassplus@gmail.com
            </a>
          </p>

          {/* 🔥 SOCIAL */}
          <div className="social-icons">
            <motion.a
              href="https://www.facebook.com/people/Sharp-Class-Plus-%E0%A4%B6%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AA-%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%B8-%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A4%B8/61570904293510/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaFacebookF />
            </motion.a>

            <motion.a
              href="https://www.youtube.com/@mandalsirnepal/featured"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        © 2026 Sharp Class Plus. All rights reserved.
      </motion.div>

    </footer>
  );
}