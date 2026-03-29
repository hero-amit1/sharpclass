import "../css/About.css";

export default function About() {
  return (
    <div className="about">

      {/* 🔥 HERO SECTION */}
      <section className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <h1>About Sharp Class Plus</h1>
          <p>
            Empowering students with skills, knowledge, and confidence to succeed.
          </p>
        </div>
      </section>

      <div className="about-container">

        {/* 🔥 WHO WE ARE */}
        <div className="about-content">

          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Sharp Class Plus is a leading institute delivering high-quality
              training for engineering, IT, and public service exams.
            </p>
            <p>
              We focus on practical learning, real-world applications, and
              student success through modern teaching methods.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="students"
            />
          </div>
        </div>

        {/* 🔥 STATS SECTION */}
        <div className="about-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Students Trained</p>
          </div>

          <div className="stat">
            <h3>50+</h3>
            <p>Expert Teachers</p>
          </div>

          <div className="stat">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>

        {/* 🔥 FEATURES */}
        <div className="about-features">

          <div className="feature-box">
            <h3>Expert Teachers</h3>
            <p>Industry professionals with real experience.</p>
          </div>

          <div className="feature-box">
            <h3>Practical Learning</h3>
            <p>Hands-on training with real-world examples.</p>
          </div>

          <div className="feature-box">
            <h3>Career Support</h3>
            <p>Guidance from learning to job placement.</p>
          </div>

        </div>

        {/* 🔥 MISSION / VISION */}
        <div className="mission">

          <div className="mission-box">
            <h2>Our Mission</h2>
            <p>
              To provide quality education that empowers students with knowledge,
              skills, and confidence to succeed in their careers.
            </p>
          </div>

          <div className="mission-box">
            <h2>Our Vision</h2>
            <p>
              To become a leading institute recognized for excellence in
              education and student success.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}