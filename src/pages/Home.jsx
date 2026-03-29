import "../css/Home.css";
import bgImage from "../assets/hero.jpg";

export default function Home() {
  return (
    <div className="home">

      {/* 🔥 HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            Build Your Future with <span>Sharp Class Plus</span>
          </h1>

          <p>
            Professional training for Engineering, PSC, and Technical Careers.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Explore Courses</button>
          </div>
        </div>
      </section>

      {/* 🔥 COURSES SECTION */}
      <section className="courses-section">
        <h2>Our Popular Courses</h2>

        <div className="courses">
          <div className="course-card">
            <h3>Engineer Preparation</h3>
            <p>Complete preparation for engineering exams.</p>
          </div>

          <div className="course-card">
            <h3>Sub-Engineer</h3>
            <p>Focused training for technical entrance exams.</p>
          </div>

          <div className="course-card">
            <h3>Crash Courses</h3>
            <p>Quick revision and intensive preparation.</p>
          </div>
        </div>
      </section>

      {/* 🔥 PRINCIPAL MESSAGE */}
      <section className="principal-section">
        <div className="principal-content">
          <h2>Message from Principal</h2>
          <p>
            "At Sharp Class Plus, our mission is to empower students with
            knowledge, skills, and confidence. We focus on practical learning
            and real-world success."
          </p>
          <h4>- Principal</h4>
        </div>
      </section>

      {/* 🔥 ACHIEVEMENTS */}
      <section className="achievements">
        <div className="achieve-box">
          <h2>500+</h2>
          <p>Students Enrolled</p>
        </div>

        <div className="achieve-box">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

        <div className="achieve-box">
          <h2>50+</h2>
          <p>Courses Available</p>
        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section className="features-section">
        <h2>Why Choose Us</h2>

        <div className="features">
          <div className="feature-box">
            <h3>Expert Trainers</h3>
            <p>Learn from industry professionals.</p>
          </div>

          <div className="feature-box">
            <h3>Practical Learning</h3>
            <p>Hands-on training with real projects.</p>
          </div>

          <div className="feature-box">
            <h3>Career Support</h3>
            <p>We help you achieve your career goals.</p>
          </div>
        </div>
      </section>

      {/* 🔥 TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "Best institute! Helped me pass my engineering exam."
            </p>
            <h4>- Student A</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Great teachers and practical learning experience."
            </p>
            <h4>- Student B</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Highly recommended for PSC preparation."
            </p>
            <h4>- Student C</h4>
          </div>
        </div>
      </section>

      {/* 🔥 PROMO */}
      <section className="promo">
        <div className="promo-card">
          <h2>🎉 Limited Offer</h2>
          <p className="discount">25% OFF</p>
          <p>On all courses this month</p>
          <button>Enroll Now</button>
        </div>
      </section>

    </div>
  );
}