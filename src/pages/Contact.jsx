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

export default function Contact() {

  // 🔥 Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
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
          <p>We are here to help you. Get in touch with us.</p>
        </motion.div>
      </div>

      <div className="contact-container">

        {/* 🔥 CONTACT INFO */}
        <motion.div
          className="contact-info"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Address",
              value: "Kathmandu, Nepal"
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
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}

          {/* 🔥 SOCIAL */}
          <motion.div
            className="social-icons"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
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
          </motion.div>

        </motion.div>

        {/* 🔥 FORM */}
        <motion.form
          className="contact-form"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <h2>Send Us a Message</h2>

          <div className="form-row">
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Your Email *" required />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea rows="5" placeholder="Your Message *" required></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

        </motion.form>

      </div>
 {/* 🔥 MAP SECTION */}
<motion.div
  className="map-section"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>

  {/* ✅ TITLE */}
  <motion.h2
    className="map-title"
    variants={fadeUp}
  >
    📍 Find Us on Map
  </motion.h2>

  <iframe
    src="https://maps.google.com/maps?q=26.4612006,87.2623174&z=17&output=embed"
    width="100%"
    height="400"
    style={{ border: 0 }}
    loading="lazy"
    title="map"
  ></iframe>

</motion.div>

    </div>
  );
}