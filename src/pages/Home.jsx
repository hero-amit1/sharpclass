import "../css/Home.css";
import bgImage from "../assets/hero.jpg"; // (add your image here)

export default function Home() {
  return (
    <div className="home">

      {/* 🔥 HERO SECTION WITH BACKGROUND */}
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
            Learn with experts and achieve your dream career.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Explore Courses</button>
          </div>

        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section className="features-section">
        <h2>Our Key Features</h2>

        <div className="features">
          <div className="feature-box">
            <h3>Expert Trainers</h3>
            <p>Learn from industry professionals with real experience.</p>
          </div>

          <div className="feature-box">
            <h3>Practical Learning</h3>
            <p>Hands-on training with real-world projects.</p>
          </div>

          <div className="feature-box">
            <h3>Career Support</h3>
            <p>We guide you from learning to job placement.</p>
          </div>
        </div>
      </section>

      {/* 🔥 PROMO SECTION */}
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