import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
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
              <p>
                <a href="tel:+9779804044190">
                  +977 9804044190
                </a>
              </p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>
                <a href="mailto:sharpclassplus@gmail.com">
                  sharpclassplus@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* 🔥 SOCIAL */}
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

        {/* 🔥 CONTACT FORM */}
        <form className="contact-form">

          <h2>Send Us a Message</h2>

          <div className="form-row">
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Your Email *" required />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea rows="5" placeholder="Your Message *" required></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      {/* 🔥 GOOGLE MAP */}
      <div className="map-section">
        <iframe
          src="https://maps.google.com/maps?q=26.4612006,87.2623174&z=17&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          title="map"
        ></iframe>
      </div>

    </div>
  );
}