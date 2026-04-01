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

  // 🔴 REPLACE ONLY IF WRONG (yours look OK now)
  const SERVICE_ID = "service_hijcvub";
  const TEMPLATE_ID = "template_lg5rymh";
  const PUBLIC_KEY = "ykXccVLfqrLulFMYB";

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (e.target.type === "file") {
      setFormData({ ...formData, screenshot: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;

    // ✅ Add note instead of sending file
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "screenshot_note";
    hiddenInput.value = formData.screenshot
      ? "User uploaded screenshot on website"
      : "No screenshot uploaded";
    form.appendChild(hiddenInput);

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
          console.error("❌ ERROR:", error);
          setStatus("error");
        }
      );
  };

  return (
    <div className="enroll">

      <div className="enroll-container">

        <motion.form
          className="enroll-form"
          onSubmit={handleSubmit}
        >
          <h2>Registration Form</h2>

          {status === "success" && (
            <p className="success-msg">✅ Submitted successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">❌ Failed. Try again!</p>
          )}
          {status === "loading" && (
            <p className="loading-msg">⏳ Sending...</p>
          )}

          <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone *" required />
          <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp" />

          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Course *</option>
            <option>Engineer (Civil)</option>
            <option>Sub-Engineer</option>
          </select>

          <select name="mode" value={formData.mode} onChange={handleChange} required>
            <option value="">Mode *</option>
            <option>Online</option>
            <option>Physical</option>
          </select>

          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />

          {/* 🔴 IMPORTANT FIX HERE */}
          <input type="file" accept="image/*" onChange={handleChange} />

          {formData.screenshot && (
            <img
              src={URL.createObjectURL(formData.screenshot)}
              alt="preview"
              className="preview-img"
            />
          )}

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Submitting..." : "Submit Enrollment"}
          </button>
        </motion.form>

      </div>
    </div>
  );
}