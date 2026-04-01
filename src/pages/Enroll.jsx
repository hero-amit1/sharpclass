import { useState } from "react";
import "../css/Enroll.css";
import mopImg from "../assets/mop.jpg";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Enroll() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    course: "",
    whatsapp: "",
    mode: "",
    message: "",
    screenshot: null,
  });

  const [status, setStatus] = useState("");

  // ✅ 🔴 REPLACE THESE (FROM EMAILJS DASHBOARD)
  const SERVICE_ID = "service_hijcvub";
  const TEMPLATE_ID = "template_lg5rymh";
  const PUBLIC_KEY = "ykXccVLfqrLulFMYB";

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "screenshot") {
      setFormData({ ...formData, screenshot: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;

    emailjs 
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("✅ SUCCESS:", result.text);

          setStatus("success");

          setFormData({
            name: "",
            email: "",
            address: "",
            phone: "",
            course: "",
            whatsapp: "",
            mode: "",
            message: "",
            screenshot: null,
          });

          form.reset();
        },
        (error) => {
          console.error("❌ ERROR:", error); // 👈 VERY IMPORTANT
          setStatus("error");
        }
      );
  };

  // Animations
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

          {/* STATUS */}
          {status === "success" && (
            <p className="success-msg">✅ Submitted successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">❌ Failed. Check console (F12)</p>
          )}
          {status === "loading" && (
            <p className="loading-msg">⏳ Sending...</p>
          )}

          <input type="text" name="name" value={formData.name} placeholder="Full Name *" onChange={handleChange} required />
          <input type="email" name="email" value={formData.email} placeholder="Email Address *" onChange={handleChange} required />
          <input type="text" name="address" value={formData.address} placeholder="Address" onChange={handleChange} />
          <input type="text" name="phone" value={formData.phone} placeholder="Phone Number *" onChange={handleChange} required />
          <input type="text" name="whatsapp" value={formData.whatsapp} placeholder="WhatsApp Number" onChange={handleChange} />

          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Applied For *</option>
            <option>Engineer (Civil)</option>
            <option>Sub-Engineer</option>
            <option>Asst. Sub-Engineer</option>
            <option>Bridge Courses</option>
            <option>Other</option>
          </select>

          <select name="mode" value={formData.mode} onChange={handleChange} required>
            <option value="">Class Mode *</option>
            <option>Online</option>
            <option>Physical</option>
          </select>

          <textarea name="message" value={formData.message} rows="4" placeholder="Inquiry" onChange={handleChange}></textarea>

          <label className="upload-label">Upload Payment Screenshot (Optional)</label>
          <input type="file" name="screenshot" accept="image/*" onChange={handleChange} />

          {formData.screenshot && (
            <motion.img
              src={URL.createObjectURL(formData.screenshot)}
              alt="preview"
              className="preview-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          )}

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Submitting..." : "Submit Enrollment"}
          </button>
        </motion.form>

        {/* SIDE */}
        <motion.div
          className="enroll-info"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Contact Us</h2>
          <p><strong>📞 Call:</strong> +977 9804044190</p>
          <p><strong>💬 WhatsApp:</strong> +977 9804044190</p>

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
              <img src={mopImg} alt="Mode of Payment" />
              <div className="payment-text">
                <p>📸 Send your payment screenshot</p>
                <p>✅ Then click submit to complete enrollment</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}