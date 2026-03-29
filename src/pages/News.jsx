import { useState } from "react";
import "../css/News.css";

const categories = ["All", "Admissions", "Exams"];

const newsData = [
  {
    title: "Admission Open",
    date: "March 2026",
    category: "Admissions",
    description:
      "Admissions are now open for all engineering and public service preparation courses.",
    image: "https://picsum.photos/500/300?1",
  },
  {
    title: "Exam Schedule Published",
    date: "February 2026",
    category: "Exams",
    description:
      "Latest exam schedule for upcoming PSC and Engineering Council exams is now available.",
    image: "https://picsum.photos/500/300?2",
  },
];

export default function News() {
  const [filter, setFilter] = useState("All");

  const filteredNews =
    filter === "All"
      ? newsData
      : newsData.filter((item) => item.category === filter);

  const featured = newsData[0];

  return (
    <div className="news">

      {/* 🔥 HERO */}
      <div className="news-hero">
        <div className="overlay"></div>
        <div className="news-hero-content">
          <h1>Latest News & Updates</h1>
          <p>Stay informed with our latest announcements</p>
        </div>
      </div>

      <div className="news-container">

        {/* 🔥 FEATURED NEWS */}
        <div className="featured-news">
          <img src={featured.image} alt={featured.title} />

          <div className="featured-content">
            <span className="tag">{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <button>Read Full Story →</button>
          </div>
        </div>

        {/* 🔥 FILTER */}
        <div className="news-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 GRID */}
        <div className="news-grid">
          {filteredNews.map((news, i) => (
            <div key={i} className="news-card">

              <div className="news-img">
                <img src={news.image} alt={news.title} />
                <span className="tag">{news.category}</span>
              </div>

              <div className="news-content">
                <p className="news-date">{news.date}</p>

                <h3>{news.title}</h3>

                <p>{news.description}</p>

                <button className="read-more">
                  Read More →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}