import "../css/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion"; // ✅ FIXED

// ✅ ICONS
import {
  FaUserGraduate,
  FaTools,
  FaHardHat,
  FaCertificate,
  FaTint,
  FaStar,
  FaUsers,
  FaAward,
} from "react-icons/fa";

// ✅ IMAGES
import img1 from "../assets/1.webp";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpeg";

export default function Home() {

  // ✅ Scroll To Top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // 🔥 ANIMATION
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },

    show: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },

    show: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
      },
    },
  };

  // 🔥 HERO SLIDES
  const slides = [
    {
      title: "Build Your Future with",
      highlight: "Sharp Class Plus",
      desc: "Professional training for Engineering & Technical Careers",
      img: img1,
    },

    {
      title: "Crack Engineering Exams with",
      highlight: "Expert Guidance",
      desc: "Learn from experienced instructors",
      img: img2,
    },

    {
      title: "Upgrade Your Skills with",
      highlight: "Practical Learning",
      desc: "Hands-on projects & real-world training",
      img: img3,
    },
  ];

  // 🔥 COURSES
  const coursesData = [
    {
      title: "Engineer Preparation",
      desc:
        "Complete preparation for engineering entrance and government competitive exams.",
      icon: <FaUserGraduate />,
    },

    {
      title: "Sub-Engineer Preparation",
      desc:
        "Focused training for sub-engineer level technical and public service exams.",
      icon: <FaTools />,
    },

    {
      title: "Assistant Sub-Engineer",
      desc:
        "Comprehensive coaching for assistant sub-engineer exams with practical concepts.",
      icon: <FaHardHat />,
    },

    {
      title: "NEC License Preparation",
      desc:
        "Specialized preparation for Nepal Engineering Council licensing exams.",
      icon: <FaCertificate />,
    },

    {
      title: "Khane Pani & Sarasaafai Technician",
      desc:
        "Targeted courses for water supply and sanitation technician-level exams.",
      icon: <FaTint />,
    },
  ];

  // 🔥 TESTIMONIALS
  const testimonialsData = [
    {
      text:
        "Amazing institute with real results and supportive teachers.",
      name: "Sweta Thapa",
    },

    {
      text:
        "Best place to prepare for engineering entrance exams.",
      name: "Ramesh Karki",
    },

    {
      text:
        "Teachers are very practical and motivating.",
      name: "Anita Sharma",
    },
  ];

  return (
    <div className="home">

      {/* 🔥 HERO SECTION */}
      <section className="hero-slider">

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1200}
          loop={true}
        >

          {slides.map((slide, index) => (

            <SwiperSlide key={index}>

              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}
              >

                <div className="overlay"></div>

                <motion.div
                  className="hero-content"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                >

                  <h1>
                    {slide.title}
                    {" "}
                    <span>{slide.highlight}</span>
                  </h1>

                  <p>{slide.desc}</p>

                  <div className="hero-buttons">

                    <Link to="/about">
                      <button className="primary-btn">
                        Get Started
                      </button>
                    </Link>

                    <Link to="/services">
                      <button className="secondary-btn">
                        Explore Courses
                      </button>
                    </Link>

                  </div>

                </motion.div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </section>

      {/* 🔥 STATS */}
      <section className="stats-section">

        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {[
            {
              icon: <FaUsers />,
              number: "500+",
              text: "Students",
            },

            {
              icon: <FaAward />,
              number: "95%",
              text: "Success Rate",
            },

            {
              icon: <FaStar />,
              number: "10+",
              text: "Expert Trainers",
            },
          ].map((item, i) => (

            <motion.div
              className="stat-card"
              key={i}
              variants={fadeUp}
              transition={{
                delay: i * 0.2,
              }}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <h2>{item.number}</h2>

              <p>{item.text}</p>

            </motion.div>

          ))}

        </motion.div>

      </section>

      {/* 🔥 COURSES */}
      <section className="courses-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
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
              transition={{
                delay: i * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
            >

              <div className="course-icon">
                {course.icon}
              </div>

              <h3>{course.title}</h3>

              <p>{course.desc}</p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* 🔥 DIRECTOR MESSAGE */}
      <section className="principal-section">

        <motion.div
          className="principal-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
        >

          <h2>Message from Director</h2>

          <p>
            Dear Students,
            <br /><br />

            We thank you for trusting
            Sharp Class Plus Career Center.

            Education is not only for exams
            but also for life and success.

            <br /><br />

            Our mission is to provide
            quality engineering education,
            practical learning,
            and career-focused guidance.

            <br /><br />

            We wish you a successful future
            with SCPCC.

          </p>

          <h4>
            — Ms. Ranju Kumari Mandal
          </h4>

        </motion.div>

      </section>

      {/* 🔥 FEATURES */}
      <section className="features-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Why Choose Us
        </motion.h2>

        <div className="features">

          {[
            "Expert Trainers",
            "Practical Learning",
            "Career Support",
          ].map((f, i) => (

            <motion.div
              className="feature-box"
              key={i}
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              transition={{
                delay: i * 0.2,
              }}
              whileHover={{
                scale: 1.05,
              }}
            >

              <h3>{f}</h3>

              <p>
                High-quality learning
                experience with modern
                teaching methods.
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* 🔥 TESTIMONIALS */}
      <section className="testimonials">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
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
              transition={{
                delay: i * 0.2,
              }}
            >

              <p>
                "{t.text}"
              </p>

              <h4>
                — {t.name}
              </h4>

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

          <p className="discount">
            25% OFF
          </p>

          <p>
            Enroll today and start your
            career journey with us.
          </p>

          <Link to="/enroll">

            <button>
              Enroll Now
            </button>

          </Link>

        </motion.div>

      </section>

    </div>
  );
}