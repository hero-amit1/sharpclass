import "../css/News.css";

const newsData = [
  {
    id: 1,
    title: "Admission Open",
    image: "https://picsum.photos/500/300?1",
  },
  {
    id: 2,
    title: "Exam Schedule Published",
    image: "https://picsum.photos/500/300?2",
  },
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

        {/* 🔥 GRID ONLY */}
        <div className="news-grid">
          {newsData.map((news) => (
            <div key={news.id} className="news-card">

              <div className="news-img">
                <img src={news.image} alt={news.title} />
              </div>

              <div className="news-content">
                <h3>{news.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}