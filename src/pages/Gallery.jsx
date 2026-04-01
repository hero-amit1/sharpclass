import { useState } from "react";
import "../css/Gallery.css";

const images = [
  { id: 1, src: "https://picsum.photos/400/300?1" },
  { id: 2, src: "https://picsum.photos/400/300?2" },
  { id: 3, src: "https://picsum.photos/400/300?3" },
  { id: 4, src: "https://picsum.photos/400/300?4" },
  { id: 5, src: "https://picsum.photos/400/300?5" },
  { id: 6, src: "https://picsum.photos/400/300?6" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

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

        {/* 🔥 GRID */}
        <div className="gallery-grid">
          {images.map((img) => (
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