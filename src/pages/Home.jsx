import "../css/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {

  // 🔥 CUSTOM COUNT HOOK (NO LIBRARY)
  const CountUp = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
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

  // 🔥 Animation Variants
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
      img: "https://images.unsplash.com/photo-1581090700227-4c4b6c2f3d8b"
    },
    {
      title: "Crack Engineering Exams with",
      highlight: "Expert Guidance",
      desc: "Learn from experienced instructors",
      img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94"
    },
    {
      title: "Upgrade Your Skills with",
      highlight: "Practical Learning",
      desc: "Hands-on projects & real-world training",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    }
  ];

  return (
    <div className="home">

      {/* 🔥 HERO */}
      <section className="hero-slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
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
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
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
          {[
            { title: "Engineer Preparation", desc: "Complete preparation for engineering entrance exams." },
            { title: "Sub-Engineer", desc: "Focused training for technical competitive exams." },
            { title: "Crash Courses", desc: "Quick revision & intensive preparation programs." }
          ].map((course, i) => (
            <motion.div
              className="course-card"
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
            >
              <div className="course-icon">🎓</div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 PRINCIPAL */}
      <section className="principal-section">
        <motion.div
          className="principal-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
        >
          <h2>Message from Principal</h2>
          <p>"We focus on practical learning, real-world skills, and student success."</p>
          <h4>- Principal</h4>
        </motion.div>
      </section>

      {/* 🔥 ACHIEVEMENTS (FIXED + COUNT ANIMATION) */}
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
            transition={{ delay: i * 0.2 }}
          >
            <h2>
              <CountUp end={item.num} suffix={item.suffix} />
            </h2>
            <p>{item.label}</p>
          </motion.div>
        ))}
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
          {[1, 2, 3].map((t, i) => (
            <motion.div
              className="testimonial-card"
              key={t}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
            >
              <p>"Amazing institute with real results!"</p>
              <h4>- Student</h4>
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