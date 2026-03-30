import {
  FaUserGraduate,
  FaTools,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Service.css";

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
];

export default function Services() {
  return (
    <div className="services">

      {/* 🔥 HERO */}
      <section className="services-hero">
        <div className="overlay"></div>
        <div className="services-hero-content">
          <h1>
            Upgrade Your Skills with <span>Professional Training</span>
          </h1>
          <p>
            We deliver high-quality, career-focused education to help you
            succeed in competitive exams and real-world careers.
          </p>
        </div>
      </section>

      <div className="services-container">

        {/* 🔥 COURSES TITLE */}
        <div className="section-title">
          <h2>
            Our <span>Courses</span>
          </h2>
          <p>
            Choose from our most in-demand professional courses designed for success.
          </p>
        </div>

        {/* 🔥 COURSES GRID */}
        <div className="services-grid">
          {courses.map((course, i) => (
            <div key={i} className="service-card">

              <div className="service-icon">
                {course.icon}
              </div>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              {/* ✅ IMPORTANT: LINK WRAPS BUTTON */}
              <Link
                to={`/course/${course.slug}`}
                style={{ textDecoration: "none" }}
              >
                <button className="service-btn">
                  Explore Course →
                </button>
              </Link>

            </div>
          ))}
        </div>

        {/* 🔥 PROCESS SECTION */}
        <div className="process">
          <h2>
            Your Journey to <span>Success</span>
          </h2>

          <div className="process-steps">
            <div className="step">
              <FaCheckCircle />
              <h4>Enroll</h4>
              <p>Select your preferred course</p>
            </div>

            <div className="step">
              <FaCheckCircle />
              <h4>Learn</h4>
              <p>Attend expert-led interactive classes</p>
            </div>

            <div className="step">
              <FaCheckCircle />
              <h4>Practice</h4>
              <p>Improve through tests & assignments</p>
            </div>

            <div className="step">
              <FaCheckCircle />
              <h4>Achieve</h4>
              <p>Crack exams and build your career</p>
            </div>
          </div>
        </div>

        {/* 🔥 WHY CHOOSE US */}
        <div className="why-us">
          <h2>
            Why Students <span>Choose Us</span>
          </h2>

          <ul>
            <li>Expert instructors with real industry experience</li>
            <li>Practical, hands-on training approach</li>
            <li>Regular tests & detailed performance analysis</li>
            <li>Personal mentorship and career guidance</li>
            <li>Proven success record of students</li>
          </ul>
        </div>

        {/* 🔥 CTA */}
        <div className="services-cta">
          <h2>Start Your Career Journey Today 🚀</h2>
          <p>
            Join our professional courses and take the first step toward your
            dream career.
          </p>
          <button>Enroll Now</button>
        </div>

      </div>
    </div>
  );
}