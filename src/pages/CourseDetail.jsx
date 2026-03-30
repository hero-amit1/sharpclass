import { useParams, Link } from "react-router-dom";
import courseData from "./CourseData.js";
import "../css/Course.css";

export default function CourseDetail() {
  const { slug } = useParams();

  const course = courseData.find((c) => c.slug === slug);
  const otherCourses = courseData.filter((c) => c.slug !== slug);

  if (!course) {
    return <h2 style={{ padding: "100px" }}>Course Not Found</h2>;
  }

  return (
    <div className="course-detail">

      {/* HERO */}
      <div
        className="course-hero"
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <div className="overlay"></div>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </div>

      {/* CONTENT */}
      <div className="course-content">

        {/* LEFT */}
        <div className="course-left">

          {/* 🎥 YOUTUBE VIDEO PREVIEW (FIXED) */}
          <div className="course-video">
            <iframe
              src={course.video}
              title="Course Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* OVERVIEW */}
          <div className="course-info">
            <h3>Course Overview</h3>
            <p>
              Learn with structured lessons, weekly & monthly mock tests,
              including both objective and subjective practice. This course is
              designed to help you crack competitive exams with confidence.
            </p>
          </div>

          {/* SYLLABUS */}
          <div className="course-syllabus">
            <h3>Course Syllabus</h3>
            <ul>
              {course.syllabus.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* EXTRA CONTENT (NEW 🔥) */}
          <div className="course-features">
            <h3>What You’ll Get</h3>
            <ul>
              <li>✔ Weekly Mock Tests (Objective + Subjective)</li>
              <li>✔ Monthly Full-Length Exams</li>
              <li>✔ Doubt Solving Sessions</li>
              <li>✔ Study Materials & Notes</li>
              <li>✔ Real Exam Practice Environment</li>
            </ul>
          </div>

        </div>

        {/* RIGHT - PAYMENT CARD */}
        <div className="course-sidebar">

          <h3>{course.title}</h3>

          <p className="course-price">{course.price}</p>
          <p className="course-duration">
            Duration: {course.duration}
          </p>

          {/* 💳 PAYMENT UI */}
          {/* <button className="buy-btn">💳 Buy Now</button> */}

          <Link to="/enroll">
            <button className="enroll-btn">Enroll Now</button>
          </Link>

          <div className="course-extra">
            <p>✔ Lifetime Access</p>
            <p>✔ Certificate Included</p>
            <p>✔ Mobile + Desktop Access</p>
            <p>✔ Weekly + Monthly Tests</p>
            <p>✔ Expert Mentorship</p>
          </div>
        </div>

      </div>

      {/* RELATED */}
      <div className="related-courses">
        <h2>Other Courses</h2>

        <div className="related-grid">
          {otherCourses.map((item, i) => (
            <div key={i} className="related-card">

              <img src={item.image} alt={item.title} />

              <h4>{item.title}</h4>
              <p>{item.description}</p>

              <Link to={`/course/${item.slug}`}>
                <button className="related-btn">
                  View Course →
                </button>
              </Link>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}