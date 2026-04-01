import "../css/About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {

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

  return (
    <div className="about">

      {/* 🔥 HERO */}
      <section className="about-hero">
        <div className="about-overlay"></div>

        <motion.div
          className="about-hero-content"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1>
            About <span>Sharp Class Plus</span>
          </h1>
          <p>
            Shaping future professionals through quality education,
            practical skills, and expert guidance.
          </p>
        </motion.div>
      </section>

      <div className="about-container">

        {/* 🔥 WHO WE ARE */}
        <div className="about-content">

          <motion.div
            className="about-text"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>Who We Are</h2>
            <p>
              <strong>Sharp Class Plus</strong> is a premier institute dedicated
              to preparing students for engineering, IT, and public service careers.
            </p>
            <p>
              Our approach combines <strong>conceptual learning</strong> with
              <strong> real-world application</strong>, ensuring students not only
              pass exams but excel in their professional journey.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="students"
            />
          </motion.div>

        </div>

        {/* 🔥 STATS */}
        <div className="about-stats">
          {[
            { num: "500+", label: "Students Trained" },
            { num: "50+", label: "Expert Trainers" },
            { num: "95%", label: "Success Rate" }
          ].map((stat, i) => (
            <motion.div
              className="stat"
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{stat.num}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 FEATURES */}
        <div className="about-features">
          {[
            {
              title: "Expert Faculty",
              desc: "Learn from experienced mentors and industry experts."
            },
            {
              title: "Practical Learning",
              desc: "Hands-on training with real-world projects & case studies."
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
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 MISSION / VISION */}
        <div className="mission">

          <motion.div
            className="mission-box"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              To empower students with high-quality education, practical skills,
              and the confidence needed to succeed in competitive environments.
            </p>
          </motion.div>

          <motion.div
            className="mission-box"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>Our Vision</h2>
            <p>
              To become a nationally recognized institute known for excellence,
              innovation, and student success.
            </p>
          </motion.div>

        </div>

        {/* 🔥 PRINCIPAL */}
        <motion.div
          className="principal"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Message from the Principal</h2>
          <p>
            “At Sharp Class Plus, we believe education is not just about passing exams,
            but about building a strong foundation for life. Our goal is to guide every
            student toward success with dedication, discipline, and innovation.”
          </p>
          <h4>— Principal, Sharp Class Plus</h4>
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

          <div className="achieve-grid">
            {[
              {
                title: "Top Results",
                desc: "Consistently high rankings in competitive exams."
              },
              {
                title: "Trusted Institute",
                desc: "Recognized by hundreds of successful students."
              },
              {
                title: "Modern Learning",
                desc: "Advanced teaching methods & digital resources."
              }
            ].map((a, i) => (
              <motion.div
                className="achieve-card"
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔥 CTA */}
        <motion.div
          className="about-cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Join Us & Build Your Future 🚀</h2>
          <p>
            Start your journey with Sharp Class Plus and achieve your career goals.
          </p>

          <Link to="/enroll">
            <motion.button
              whileHover={{ scale: 1.05 }}
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