import { useState } from "react";
import "../css/Gallery.css";

const categories = ["All", "Classes", "Events", "Students"];

const images = [
  { id: 1, src: "https://picsum.photos/400/300?1", category: "Classes" },
  { id: 2, src: "https://picsum.photos/400/300?2", category: "Events" },
  { id: 3, src: "https://picsum.photos/400/300?3", category: "Students" },
  { id: 4, src: "https://picsum.photos/400/300?4", category: "Classes" },
  { id: 5, src: "https://picsum.photos/400/300?5", category: "Events" },
  { id: 6, src: "https://picsum.photos/400/300?6", category: "Students" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="gallery">

      {/* 🔥 HERO */}
      <div className="gallery-hero">
        <div className="overlay"></div>
        <div className="gallery-hero-content">
          <h1>Our Gallery</h1>
          <p>Explore our classes, events, and student moments</p>
        </div>
      </div>

      <div className="gallery-container">

        {/* 🔥 FILTER BUTTONS */}
        <div className="gallery-filters">
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
        <div className="gallery-grid">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() => setSelected(img.src)}
            >
              <img src={img.src} alt="gallery" />

              {/* OVERLAY */}
              <div className="gallery-overlay">
                <span>View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="gallery-modal">
          <button
            className="close-btn"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          <img src={selected} alt="preview" className="modal-img" />
        </div>
      )}
    </div>
  );
}