import { useState } from "react";
import "../css/Enroll.css";

export default function Enroll() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
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
    alert("Enrollment Submitted!");
    console.log(formData);
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

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          {/* COURSE SELECT */}
          <select name="course" onChange={handleChange} required>
            <option value="">Select Course</option>
            <option>Engineer Preparation</option>
            <option>Sub-Engineer</option>
            <option>Assistant Sub-Engineer</option>
            <option>Crash Course</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Additional Message (Optional)"
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Enrollment</button>
        </form>

        {/* 🔥 SIDE INFO */}
        <div className="enroll-info">
          <h2>Why Join Us?</h2>

          <ul>
            <li>✔ Expert Trainers</li>
            <li>✔ Practical Learning</li>
            <li>✔ Regular Tests</li>
            <li>✔ Career Support</li>
          </ul>

          <div className="highlight">
            <h3>🎉 Limited Offer</h3>
            <p>Get 25% OFF on all courses this month</p>
          </div>
        </div>

      </div>
    </div>
  );
}