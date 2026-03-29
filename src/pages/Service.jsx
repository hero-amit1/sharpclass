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
      "Complete preparation for engineering-level competitive exams.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Sub-Engineer Courses",
    description:
      "Focused training for Sub-Engineer entrance and exams.",
    icon: <FaTools />,
  },
  {
    title: "Assistant Sub-Engineer",
    description:
      "Structured courses for Assistant Sub-Engineer roles.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Weekly & Monthly Tests",
    description:
      "Regular assessments to track your performance and progress.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Crash Courses",
    description:
      "Short-term intensive courses for quick revision and success.",
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
          <h1>Our Professional Services</h1>
          <p>
            We provide industry-focused training programs designed to build your career.
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

              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>

        {/* 🔥 PROCESS SECTION */}
        <div className="process">
          <h2>Our Learning Process</h2>

          <div className="process-steps">
            <div className="step">
              <FaCheckCircle />
              <p>Enroll in your desired course</p>
            </div>

            <div className="step">
              <FaCheckCircle />
              <p>Attend expert-led classes</p>
            </div>

            <div className="step">
              <FaCheckCircle />
              <p>Practice with tests & assignments</p>
            </div>

            <div className="step">
              <FaCheckCircle />
              <p>Achieve your career goals</p>
            </div>
          </div>
        </div>

        {/* 🔥 WHY CHOOSE US */}
        <div className="why-us">
          <h2>Why Choose Us?</h2>

          <ul>
            <li>✔ Experienced & professional instructors</li>
            <li>✔ Practical and real-world training</li>
            <li>✔ Regular tests and performance tracking</li>
            <li>✔ Career guidance and support</li>
          </ul>
        </div>

        {/* 🔥 CTA */}
        <div className="services-cta">
          <h2>Start Your Journey Today 🚀</h2>
          <p>Join our courses and build a successful future.</p>
          <button>Enroll Now</button>
        </div>

      </div>
    </div>
  );
}