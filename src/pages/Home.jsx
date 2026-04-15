import "../css/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ✅ ICONS
import { FaUserGraduate, FaTools, FaHardHat, FaCertificate, FaTint } from "react-icons/fa";

// ✅ IMAGES
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

export default function Home() {

  // 🔥 ANIMATION
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

  // 🔥 HERO SLIDES
  const slides = [
    {
      title: "Build Your Future with",
      highlight: "Sharp Class Plus",
      desc: "Professional training for Engineering & Technical Careers",
      img: img1
    },
    {
      title: "Crack Engineering Exams with",
      highlight: "Expert Guidance",
      desc: "Learn from experienced instructors",
      img: img2
    },
    {
      title: "Upgrade Your Skills with",
      highlight: "Practical Learning",
      desc: "Hands-on projects & real-world training",
      img: img3
    }
  ];

  // 🔥 COURSES WITH ICONS
  const coursesData = [
    {
      title: "Engineer Preparation",
      desc: "Complete preparation for engineering entrance and government competitive exams.",
      icon: <FaUserGraduate />
    },
    {
      title: "Sub-Engineer Preparation",
      desc: "Focused training for sub-engineer level technical and public service exams.",
      icon: <FaTools />
    },
    {
      title: "Assistant Sub-Engineer",
      desc: "Comprehensive coaching for assistant sub-engineer exams with practical concepts.",
      icon: <FaHardHat />
    },
    {
      title: "NEC License Preparation",
      desc: "Specialized preparation for Nepal Engineering Council (NEC) licensing exams.",
      icon: <FaCertificate />
    },
    {
      title: "Khane Pani & Sarasaafai Technician",
      desc: "Targeted courses for water supply and sanitation technician-level exams.",
      icon: <FaTint />
    }
  ];

  const testimonialsData = [
    { text: "Amazing institute with real results!", name: "Sweta Thapa" },
    { text: "Best place to prepare for engineering exams.", name: "Ramesh Karki" },
    { text: "Teachers are very supportive and practical.", name: "Anita Sharma" }
  ];

  return (
    <div className="home">

      {/* 🔥 HERO */}
      <section className="hero-slider">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1800 }}
          speed={1000}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="overlay"></div>

                <motion.div
                  className="hero-content"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                >
                  <h1>
                    {slide.title} <span>{slide.highlight}</span>
                  </h1>

                  <p>{slide.desc}</p>

                  <div className="hero-buttons">
                    <Link to="/about">
                      <button className="primary-btn">Get Started</button>
                    </Link>
                    <Link to="/services">
                      <button className="secondary-btn">Explore Courses</button>
                    </Link>
                  </div>
                </motion.div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔥 COURSES */}
      <section className="courses-section">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show">
          Our Popular Courses
        </motion.h2>

        <div className="courses">
          {coursesData.map((course, i) => (
            <motion.div
              className="course-card"
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
            >
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 VIDEO */}
      {/* 🔥 VIDEO */}
      <section className="video-section">
        <motion.h2
          className="video-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Watch Our <span>Classes</span>
        </motion.h2>

        <motion.div
          className="video-container"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <iframe
            src="https://www.youtube-nocookie.com/embed/XubOlWcoF9w?start=191"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      {/* 🔥 DIRECTOR */}
      <section className="principal-section">
        <motion.div
          className="principal-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
        >
          <h2>Message from Director</h2>

          <p>
            Dear All! <br /><br />
            We thank you for trusting Sharp Class Plus Career Center.
            Education is not just for exams but for life.
            <br /><br />
            Our mission is to provide value-based engineering knowledge
            and help students achieve success.
            <br /><br />
            We wish you a rewarding experience at SCPCC!
          </p>

          <h4>- Ms. Ranju Kumari Mandal</h4>
        </motion.div>
      </section>

      {/* 🔥 FEATURES */}
      <section className="features-section">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show">
          Why Choose Us
        </motion.h2>

        <div className="features">
          {["Expert Trainers", "Practical Learning", "Career Support"].map((f, i) => (
            <motion.div
              className="feature-box"
              key={i}
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
            >
              <h3>{f}</h3>
              <p>Top-quality education experience.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 TESTIMONIALS */}
      <section className="testimonials">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show">
          What Students Say
        </motion.h2>

        <div className="testimonial-grid">
          {testimonialsData.map((t, i) => (
            <motion.div
              className="testimonial-card"
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
            >
              <p>"{t.text}"</p>
              <h4>- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 PROMO */}
      <section className="promo">
        <motion.div
          className="promo-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <h2>🎉 Limited Offer</h2>
          <p className="discount">25% OFF</p>
          <Link to="/enroll">
            <button>Enroll Now</button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}