import { useParams, Link } from "react-router-dom";
import courseData from "./CourseData.js";
import "../css/Course.css";
import { motion } from "framer-motion";

export default function CourseDetail() {
  const { slug } = useParams();

  const course = courseData.find((c) => c.slug === slug);
  const otherCourses = courseData.filter((c) => c.slug !== slug);

  if (!course) {
    return <h2 style={{ padding: "100px" }}>Course Not Found</h2>;
  }

  // 🔥 Animations
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
    <div className="course-detail">

      {/* HERO */}
      <div
        className="course-hero"
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <div className="overlay"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="course-content">

        {/* LEFT */}
        <motion.div
          className="course-left"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* 🎥 VIDEO */}
          <motion.div
            className="course-video"
            variants={fadeUp}
          >
            <iframe
              src={course.video}
              title="Course Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* OVERVIEW */}
          <motion.div
            className="course-info"
            variants={fadeUp}
          >
            <h3>Course Overview</h3>
            <p>
              Learn with structured lessons, weekly & monthly mock tests,
              including both objective and subjective practice. This course is
              designed to help you crack competitive exams with confidence.
            </p>
          </motion.div>

          {/* SYLLABUS */}
          <motion.div
            className="course-syllabus"
            variants={fadeUp}
          >
            <h3>Course Syllabus</h3>
            <ul>
              {course.syllabus.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="course-features"
            variants={fadeUp}
          >
            <h3>What You’ll Get</h3>
            <ul>
              {[
                "✔ Weekly Mock Tests (Objective + Subjective)",
                "✔ Monthly Full-Length Exams",
                "✔ Doubt Solving Sessions",
                "✔ Study Materials & Notes",
                "✔ Real Exam Practice Environment"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          className="course-sidebar"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3>{course.title}</h3>

          <p className="course-price">{course.price}</p>
          <p className="course-duration">
            Duration: {course.duration}
          </p>

          <Link to="/enroll">
            <motion.button
              className="enroll-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </Link>

          <div className="course-extra">
            <p>✔ Lifetime Access</p>
            <p>✔ Certificate Included</p>
            <p>✔ Mobile + Desktop Access</p>
            <p>✔ Weekly + Monthly Tests</p>
            <p>✔ Expert Mentorship</p>
          </div>
        </motion.div>

      </div>

      {/* RELATED */}
      <div className="related-courses">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Other Courses
        </motion.h2>

        <div className="related-grid">
          {otherCourses.map((item, i) => (
            <motion.div
              key={i}
              className="related-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={item.image} alt={item.title} />

              <h4>{item.title}</h4>
              <p>{item.description}</p>

              <Link to={`/course/${item.slug}`}>
                <motion.button
                  className="related-btn"
                  whileHover={{ scale: 1.05 }}
                >
                  View Course →
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}