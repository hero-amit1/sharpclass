import {
  FaUserGraduate,
  FaTools,
  FaClipboardCheck,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import "../css/Service.css";

const services = [
  {
    title: "Engineer Preparation",
    description:
      "Comprehensive coaching for engineering-level competitive exams with expert guidance.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Sub-Engineer Courses",
    description:
      "Specialized training programs designed for Sub-Engineer entrance success.",
    icon: <FaTools />,
  },
  {
    title: "Assistant Sub-Engineer",
    description:
      "Structured courses to help you excel in Assistant Sub-Engineer roles.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Weekly & Monthly Tests",
    description:
      "Performance tracking through regular mock tests and evaluations.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Crash Courses",
    description:
      "Intensive short-term programs for quick revision and exam readiness.",
    icon: <FaBolt />,
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

        {/* 🔥 SERVICES GRID */}
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="service-btn">
                Explore Course →
              </button>
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

        {/* 🔥 EXTRA SECTION (NEW - TRUST BUILDING) */}
        <div className="services-extra">
          <h2>What Makes Us Different?</h2>

          <div className="extra-grid">
            <div className="extra-card">
              <h3>500+ Students</h3>
              <p>Successfully trained and placed</p>
            </div>

            <div className="extra-card">
              <h3>10+ Expert Trainers</h3>
              <p>Industry professionals & mentors</p>
            </div>

            <div className="extra-card">
              <h3>95% Success Rate</h3>
              <p>High performance in competitive exams</p>
            </div>
          </div>
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