import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../css/Contact.css";

export default function Contact() {
  return (
    <div className="contact">

      {/* 🔥 HERO */}
      <div className="contact-hero">
        <div className="overlay"></div>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We are here to help you. Get in touch with us.</p>
        </div>
      </div>

      <div className="contact-container">

        {/* 🔥 CONTACT INFO */}
        <div className="contact-info">

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Address</h3>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Phone</h3>
              <p>9800000000</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>info@sharpclass.com</p>
            </div>
          </div>

          {/* 🔥 SOCIAL */}
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

        </div>

        {/* 🔥 CONTACT FORM */}
        <form className="contact-form">

          <h2>Send Us a Message</h2>

          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      {/* 🔥 GOOGLE MAP */}
      <div className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}