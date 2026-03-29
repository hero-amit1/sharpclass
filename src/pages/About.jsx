import "../css/About.css";

export default function About() {
  return (
    <div className="about">

      {/* 🔥 HERO SECTION */}
      <section className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <h1>
            About <span>Sharp Class Plus</span>
          </h1>
          <p>
            Shaping future professionals through quality education,
            practical skills, and expert guidance.
          </p>
        </div>
      </section>

      <div className="about-container">

        {/* 🔥 WHO WE ARE */}
        <div className="about-content">

          <div className="about-text">
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
            <p>Expert Trainers</p>
          </div>

          <div className="stat">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>

        {/* 🔥 FEATURES */}
        <div className="about-features">

          <div className="feature-box">
            <h3>Expert Faculty</h3>
            <p>Learn from experienced mentors and industry experts.</p>
          </div>

          <div className="feature-box">
            <h3>Practical Learning</h3>
            <p>Hands-on training with real-world projects & case studies.</p>
          </div>

          <div className="feature-box">
            <h3>Career Guidance</h3>
            <p>Complete support from learning to job placement.</p>
          </div>

        </div>

        {/* 🔥 MISSION / VISION */}
        <div className="mission">

          <div className="mission-box">
            <h2>Our Mission</h2>
            <p>
              To empower students with high-quality education, practical skills,
              and the confidence needed to succeed in competitive environments.
            </p>
          </div>

          <div className="mission-box">
            <h2>Our Vision</h2>
            <p>
              To become a nationally recognized institute known for excellence,
              innovation, and student success.
            </p>
          </div>

        </div>

        {/* 🔥 PRINCIPAL MESSAGE (NEW) */}
        <div className="principal">
          <h2>Message from the Principal</h2>
          <p>
            “At Sharp Class Plus, we believe education is not just about passing exams,
            but about building a strong foundation for life. Our goal is to guide every
            student toward success with dedication, discipline, and innovation.”
          </p>
          <h4>— Principal, Sharp Class Plus</h4>
        </div>

        {/* 🔥 ACHIEVEMENTS (NEW) */}
        <div className="achievements">
          <h2>Our Achievements</h2>

          <div className="achieve-grid">
            <div className="achieve-card">
              <h3>Top Results</h3>
              <p>Consistently high rankings in competitive exams.</p>
            </div>

            <div className="achieve-card">
              <h3>Trusted Institute</h3>
              <p>Recognized by hundreds of successful students.</p>
            </div>

            <div className="achieve-card">
              <h3>Modern Learning</h3>
              <p>Advanced teaching methods & digital resources.</p>
            </div>
          </div>
        </div>

        {/* 🔥 CTA */}
        <div className="about-cta">
          <h2>Join Us & Build Your Future 🚀</h2>
          <p>
            Start your journey with Sharp Class Plus and achieve your career goals.
          </p>
          <button>Enroll Now</button>
        </div>

      </div>
    </div>
  );
}