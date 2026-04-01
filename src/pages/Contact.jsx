import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "../css/Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  // 🔥 FORM STATE (ready for backend / email integration)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // 👉 replace with API later
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // 🔥 STAGGER ANIMATION
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <div className="contact">

      {/* 🔥 HERO */}
      <div className="contact-hero">
        <div className="overlay"></div>

        <motion.div
          className="contact-hero-content"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1>Contact Us</h1>
          <p>We are here to help you. Get in touch with us anytime.</p>
        </motion.div>
      </div>

      <motion.div
        className="contact-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* 🔥 CONTACT INFO */}
        <motion.div className="contact-info" variants={fadeLeft}>

          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Address",
              value: "Biratnagar-06, Morang, Nepal"
            },
            {
              icon: <FaPhoneAlt />,
              title: "Phone",
              value: (
                <a href="tel:+9779804044190">
                  +977 9804044190
                </a>
              )
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              value: (
                <a href="mailto:sharpclassplus@gmail.com">
                  sharpclassplus@gmail.com
                </a>
              )
            }
          ].map((item, i) => (
            <motion.div
              className="info-box"
              key={i}
              variants={fadeUp}
            >
              <div className="icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}

          {/* 🔥 SOCIAL */}
          <motion.div className="social-icons" variants={fadeUp}>
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
          </motion.div>

        </motion.div>

        {/* 🔥 FORM */}
        <motion.form
          className="contact-form"
          variants={fadeRight}
          onSubmit={handleSubmit}
        >

          <h2>Send Us a Message</h2>

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

        </motion.form>

      </motion.div>

      {/* 🔥 MAP */}
      <motion.div
        className="map-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className="map-title" variants={fadeUp}>
          📍 Find Us on Map
        </motion.h2>

        <iframe
          src="https://maps.google.com/maps?q=26.4612006,87.2623174&z=17&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "15px" }}
          loading="lazy"
          title="map"
        ></iframe>
      </motion.div>

    </div>
  );
}