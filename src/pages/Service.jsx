import {
  FaUserGraduate,
  FaTools,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Service.css";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Engineer Preparation",
    slug: "engineer",
    description:
      "Complete coaching for engineering-level competitive exams with expert guidance.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Sub-Engineer Course",
    slug: "sub-engineer",
    description:
      "Specialized training designed for Sub-Engineer entrance success.",
    icon: <FaTools />,
  },
  {
    title: "Assistant Sub-Engineer",
    slug: "assistant-sub-engineer",
    description:
      "Structured courses to help you excel in Assistant Sub-Engineer roles.",
    icon: <FaUserGraduate />,
  },
  {
    title: "NEC Preparation",
    slug: "nec",
    description:
      "Focused preparation for Nepal Engineering Council (NEC) licensing exams.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Khane Pani & Sarasafai Technician",
    slug: "khawasate",
    description:
      "Focused preparation for Khane Pani tatha Sarasafai Technician (4th Level) Loksewa exam.",
    icon: <FaTools />,
  },
];

export default function Services() {

  // 🔥 Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
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
    <div className="services">

      {/* 🔥 HERO */}
      <section className="services-hero">
        <div className="overlay"></div>

        <motion.div
          className="services-hero-content"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1>
            Upgrade Your Skills with <span>Professional Training</span>
          </h1>
          <p>
            We deliver high-quality, career-focused education to help you
            succeed in competitive exams and real-world careers.
          </p>
        </motion.div>
      </section>

      <div className="services-container">

        {/* 🔥 TITLE */}
        <motion.div
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>
            Our <span>Courses</span>
          </h2>
          <p>
            Choose from our most in-demand professional courses designed for success.
          </p>
        </motion.div>

        {/* 🔥 COURSES GRID */}
        <div className="services-grid">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              className="service-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="service-icon">
                {course.icon}
              </div>

              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <Link
                to={`/course/${course.slug}`}
                style={{ textDecoration: "none" }}
              >
                <button className="service-btn">
                  Explore Course →
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 🔥 PROCESS */}
        <motion.div
          className="process"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>
            Your Journey to <span>Success</span>
          </h2>

          <div className="process-steps">
            {["Enroll", "Learn", "Practice", "Achieve"].map((step, i) => (
              <motion.div
                className="step"
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <FaCheckCircle />
                <h4>{step}</h4>
                <p>
                  {
                    [
                      "Select your preferred course",
                      "Attend expert-led interactive classes",
                      "Improve through tests & assignments",
                      "Crack exams and build your career",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🔥 WHY US */}
        <motion.div
          className="why-us"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>
            Why Students <span>Choose Us</span>
          </h2>

          <ul>
            {[
              "Expert instructors with real industry experience",
              "Practical, hands-on training approach",
              "Regular tests & detailed performance analysis",
              "Personal mentorship and career guidance",
              "Proven success record of students",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 🔥 CTA */}
        <motion.div
          className="services-cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Start Your Career Journey Today 🚀</h2>
          <p>
            Join our professional courses and take the first step toward your
            dream career.
          </p>

          <Link to="/enroll">
            <button>Enroll Now</button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}