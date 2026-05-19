import { useState, useEffect } from "react";
import "../css/Enroll.css";
import mopImg from "../assets/mop.jpg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Enroll() {

  // ✅ Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    course: "",
    whatsapp: "",
    mode: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ✅ EmailJS Config
  const SERVICE_ID = "service_1yddtvg";
  const TEMPLATE_ID = "template_athw0wr";
  const PUBLIC_KEY = "Vm5T3WKS-NjhZxytd";

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ✅ Auto clear success/error message
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        course: formData.course,
        mode: formData.mode,
        message: formData.message,
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("✅ SUCCESS:", result.text);

      setStatus("success");

      // ✅ Reset form
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        course: "",
        whatsapp: "",
        mode: "",
        message: "",
      });

    } catch (error) {
      console.error("❌ ERROR:", error);
      setStatus("error");
    }
  };

  // ✅ Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="enroll">

      {/* HERO */}
      <div className="enroll-hero">
        <div className="overlay"></div>

        <motion.div
          className="enroll-hero-content"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1>Enroll Now</h1>
          <p>Start your journey with Sharp Class Plus today</p>
        </motion.div>
      </div>

      <div className="enroll-container">

        {/* FORM */}
        <motion.form
          className="enroll-form"
          onSubmit={handleSubmit}
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Registration Form</h2>

          {status === "success" && (
            <p className="success-msg">
              ✅ Submitted successfully!
            </p>
          )}

          {status === "error" && (
            <p className="error-msg">
              ❌ Submission failed. Try again.
            </p>
          )}

          {status === "loading" && (
            <p className="loading-msg">
              ⏳ Sending...
            </p>
          )}

          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Full Name *"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address *"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Phone Number *"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            placeholder="WhatsApp Number"
            onChange={handleChange}
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Applied For *</option>
            <option>Engineer (Civil)</option>
            <option>Sub-Engineer</option>
            <option>Asst. Sub-Engineer</option>
            <option>NEC preparation</option>
            <option>Other</option>
          </select>

          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            required
          >
            <option value="">Class Mode *</option>
            <option>Online</option>
            <option>Physical</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            rows="4"
            placeholder="Inquiry"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Submitting..."
              : "Submit Enrollment"}
          </button>
        </motion.form>

        {/* SIDE INFO */}
        <motion.div
          className="enroll-info"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Contact Us</h2>

          <p>
            <strong>📞 Call:</strong>
            +977 9804044190 , 9709025820
          </p>

          <p>
            <strong>💬 WhatsApp:</strong>
            +977 9804044190
          </p>

          <div className="highlight">
            <h3>🎉 Limited Offer</h3>
            <p>Get 25% OFF on all courses this month</p>
          </div>

          <motion.div
            className="payment-section"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3>💳 Mode of Payment</h3>

            <div className="payment-box">
              <img
                src={mopImg}
                alt="Mode of Payment"
              />

              <div className="payment-text">
                <p>
                  📸 Send your payment screenshot
                  to our official WhatsApp number
                  +977 9804044190
                </p>

                <p>
                  ✅ Then click submit to complete
                  enrollment
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}