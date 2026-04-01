import "../css/About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {

  // 🔥 PRO ANIMATION VARIANTS
  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // 🔥 STAGGER CONTAINER (VERY IMPORTANT)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="about">

      {/* 🔥 HERO */}
      <section className="about-hero">
        <div className="about-overlay"></div>

        <motion.div
          className="about-hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeUp}>
            About <span>Sharp Class Plus</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Shaping future professionals through quality education,
            practical skills, and expert guidance.
          </motion.p>
        </motion.div>
      </section>

      <div className="about-container">

        {/* 🔥 WHO WE ARE */}
        <div className="about-content">

          <motion.div
            className="about-text"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={fadeLeft}>Who We Are</motion.h2>

            <motion.p variants={fadeLeft}>
              <strong>Sharp Class Plus</strong> is the only for Engineering Entrance Preparation Centre promoted by front-line entrance specialist faculties who have crafted thousands of Engineers so far...
            </motion.p>

            <motion.p variants={fadeLeft}>
              To create best Institute in Nepal for the preparation of Lok Sewa Preparation entrance exam along with other competitive exams...
            </motion.p>
          </motion.div>

          <motion.div
            className="about-image"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }} // 🔥 subtle hover effect
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="students"
            />
          </motion.div>

        </div>

        {/* 🔥 STATS */}
        <motion.div
          className="about-stats"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { num: "500+", label: "Students Trained" },
            { num: "50+", label: "Expert Trainers" },
            { num: "95%", label: "Success Rate" }
          ].map((stat, i) => (
            <motion.div className="stat" key={i} variants={fadeUp}>
              <h3>{stat.num}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 FEATURES */}
        <motion.div
          className="about-features"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Expert Faculty",
              desc: "Learn from experienced mentors and industry experts."
            },
            {
              title: "Practical Learning",
              desc: "Hands-on training with real-world projects."
            },
            {
              title: "Career Guidance",
              desc: "Complete support from learning to job placement."
            }
          ].map((f, i) => (
            <motion.div
              className="feature-box"
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }} // 🔥 lift effect
            >
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 MISSION / VISION */}
        <div className="mission">

          <motion.div
            className="mission-box"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h2>Our Mission</h2>
            <p>
              To empower students with high-quality education and confidence.
            </p>
          </motion.div>

          <motion.div
            className="mission-box"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h2>Our Vision</h2>
            <p>
              To become a nationally recognized institute for excellence.
            </p>
          </motion.div>

        </div>

        {/* 🔥 DIRECTOR */}
        <motion.div
          className="principal"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp}>Message from the Director</motion.h2>

          <motion.p variants={fadeUp}>
            “Dear All! At the outset, we would like to express our gratitude...
          </motion.p>

          <motion.h4 variants={fadeUp}>
            — Director, Mr. Ranju Kumari Mandal
          </motion.h4>
        </motion.div>

        {/* 🔥 ACHIEVEMENTS */}
        <div className="achievements">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.h2>

          <motion.div
            className="achieve-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { title: "Top Results", desc: "High rankings in exams." },
              { title: "Trusted Institute", desc: "Hundreds of success stories." },
              { title: "Modern Learning", desc: "Advanced teaching methods." }
            ].map((a, i) => (
              <motion.div
                className="achieve-card"
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 🔥 CTA */}
        <motion.div
          className="about-cta"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp}>
            Join Us & Build Your Future 🚀
          </motion.h2>

          <motion.p variants={fadeUp}>
            Start your journey with Sharp Class Plus and achieve your career goals.
          </motion.p>

          <Link to="/enroll">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}