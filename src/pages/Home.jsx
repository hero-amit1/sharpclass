import "../css/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ✅ IMAGES
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

export default function Home() {

  const CountUp = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 1500;
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [end]);

    return <>{count}{suffix}</>;
  };

  // 🔥 GLOBAL ANIMATION
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
          navigation={false}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
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
                  <motion.h1 variants={fadeUp}>
                    {slide.title} <span>{slide.highlight}</span>
                  </motion.h1>

                  <motion.p variants={fadeUp}>
                    {slide.desc}
                  </motion.p>

                  <motion.div className="hero-buttons" variants={fadeUp}>
                    <Link to="/about">
                      <button className="primary-btn">Get Started</button>
                    </Link>
                    <Link to="/services">
                      <button className="secondary-btn">Explore Courses</button>
                    </Link>
                  </motion.div>
                </motion.div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔥 COURSES */}
      <section className="courses-section">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          Our Popular Courses
        </motion.h2>

        <div className="courses">
          {[
            { title: "Engineer Preparation", desc: "Complete preparation for engineering entrance exams." },
            { title: "Sub-Engineer", desc: "Focused training for technical competitive exams." },
            { title: "University Courses", desc: "Quick revision & intensive preparation programs." }
          ].map((course, i) => (
            <motion.div
              className="course-card"
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 DIRECTOR */}
      <section className="principal-section">
        <motion.div
          className="principal-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp}>Message from Director</motion.h2>

          <motion.p variants={fadeUp}>
            Dear All! <br /><br />
            We thank you for trusting Sharp Class Plus Career Center. Education is not just for exams but for life.
            <br /><br />
            Our mission is to provide value-based engineering knowledge and help students achieve success.
            <br /><br />
            We wish you a rewarding experience at SCPCC!
          </motion.p>

          <motion.h4 variants={fadeUp}>
            - Ms. Ranju Kumari Mandal
          </motion.h4>
        </motion.div>
      </section>

      {/* 🔥 ACHIEVEMENTS */}
      <section className="achievements">
        {[
          { num: 500, suffix: "+", label: "Students" },
          { num: 95, suffix: "%", label: "Success Rate" },
          { num: 50, suffix: "+", label: "Courses" }
        ].map((item, i) => (
          <motion.div
            className="achieve-box"
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h2><CountUp end={item.num} suffix={item.suffix} /></h2>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* 🔥 FEATURES */}
      <section className="features-section">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
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
              viewport={{ once: true }}
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
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
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
              viewport={{ once: true }}
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
          viewport={{ once: true }}
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