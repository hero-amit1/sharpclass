import "../css/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function Home() {
  const slides = [
    {
      title: "Build Your Future with",
      highlight: "Sharp Class Plus",
      desc: "Professional training for Engineering & Technical Careers",
      img: "https://images.unsplash.com/photo-1581090700227-4c4b6c2f3d8b"
    },
    {
      title: "Crack Engineering Exams with",
      highlight: "Expert Guidance",
      desc: "Learn from experienced instructors",
      img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94"
    },
    {
      title: "Upgrade Your Skills with",
      highlight: "Practical Learning",
      desc: "Hands-on projects & real-world training",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    }
  ];

  return (
    <div className="home">

      {/* 🔥 HERO SLIDER */}
      <section className="hero-slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="overlay"></div>

                <div className="hero-content">
                  <h1>
                    {slide.title} <span>{slide.highlight}</span>
                  </h1>
                  <p>{slide.desc}</p>

                  <div className="hero-buttons">
                    <button className="primary-btn">Get Started</button>
                    <button className="secondary-btn">Explore Courses</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      /* 🔥 COURSES */
<section className="courses-section">
  <h2>Our Popular Courses</h2>

  <div className="courses">
    {[
      {
        title: "Engineer Preparation",
        desc: "Complete preparation for engineering entrance exams."
      },
      {
        title: "Sub-Engineer",
        desc: "Focused training for technical competitive exams."
      },
      {
        title: "Crash Courses",
        desc: "Quick revision & intensive preparation programs."
      }
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <div className="course-icon">🎓</div>
        <h3>{course.title}</h3>
        <p>{course.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* 🔥 PRINCIPAL */}
      <section className="principal-section">
        <div className="principal-content">
          <h2>Message from Principal</h2>
          <p>
            "We focus on practical learning, real-world skills, and student success."
          </p>
          <h4>- Principal</h4>
        </div>
      </section>

      {/* 🔥 ACHIEVEMENTS */}
      <section className="achievements">
        {[
          { num: "500+", label: "Students" },
          { num: "95%", label: "Success Rate" },
          { num: "50+", label: "Courses" }
        ].map((item, i) => (
          <div className="achieve-box" key={i}>
            <h2>{item.num}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* 🔥 FEATURES */}
      <section className="features-section">
        <h2>Why Choose Us</h2>

        <div className="features">
          {["Expert Trainers", "Practical Learning", "Career Support"].map((f, i) => (
            <div className="feature-box" key={i}>
              <h3>{f}</h3>
              <p>Top-quality education experience.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Students Say</h2>

        <div className="testimonial-grid">
          {[1, 2, 3].map((t) => (
            <div className="testimonial-card" key={t}>
              <p>"Amazing institute with real results!"</p>
              <h4>- Student</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 PROMO */}
      <section className="promo">
        <div className="promo-card">
          <h2>🎉 Limited Offer</h2>
          <p className="discount">25% OFF</p>
          <button>Enroll Now</button>
        </div>
      </section>

    </div>
  );
}