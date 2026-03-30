import { useState } from "react";
import "../css/Enroll.css";

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
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("✅ Enrollment Submitted!");
  };

  return (
    <div className="enroll">

      {/* 🔥 HERO */}
      <div className="enroll-hero">
        <div className="overlay"></div>
        <div className="enroll-hero-content">
          <h1>Enroll Now</h1>
          <p>Start your journey with Sharp Class Plus today</p>
        </div>
      </div>

      <div className="enroll-container">

        {/* 🔥 FORM */}
        <form className="enroll-form" onSubmit={handleSubmit}>
          <h2>Registration Form</h2>

          {/* FULL NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            onChange={handleChange}
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            onChange={handleChange}
            required
          />

          {/* ADDRESS */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

          {/* PHONE */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number *"
            onChange={handleChange}
            required
          />

          {/* WHATSAPP */}
          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number"
            onChange={handleChange}
          />

          {/* APPLIED FOR */}
          <select name="course" onChange={handleChange} required>
            <option value="">Applied For *</option>
            <option>Engineer (Civil)</option>
            <option>Sub-Engineer</option>
            <option>Asst. Sub-Engineer</option>
            <option>Bridge Courses</option>
            <option>Other</option>
          </select>

          {/* CLASS MODE */}
          <select name="mode" onChange={handleChange} required>
            <option value="">Class Mode *</option>
            <option>Online</option>
            <option>Physical</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            rows="4"
            placeholder="Inquiry"
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Enrollment</button>
        </form>

        {/* 🔥 SIDE INFO */}
        <div className="enroll-info">
          <h2>Contact Us</h2>

          <p><strong>📞 Call:</strong> +977 9804044190</p>
          <p><strong>💬 WhatsApp:</strong> +977 9804044190</p>

          <div className="highlight">
            <h3>🎉 Limited Offer</h3>
            <p>Get 25% OFF on all courses this month</p>
          </div>
        </div>

      </div>
    </div>
  );
}