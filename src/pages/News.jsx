import "../css/News.css";

// ✅ IMPORT LOCAL IMAGES
import img6 from "../assets/6.jpg";


import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";

import img13 from "../assets/13.jpg";

const newsData = [
  { id: 1, image: img6 },


  { id: 2, image: img9 },
  { id: 3, image: img10 },


  { id: 4, image: img13 },
];

export default function News() {
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

        {/* 🔥 GRID */}
        <div className="news-grid">
          {newsData.map((news) => (
            <div key={news.id} className="news-card">

              <div className="news-img">
                <img src={news.image} alt="news" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}