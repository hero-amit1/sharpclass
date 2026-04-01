import { useState } from "react";
import "../css/Gallery.css";

// ✅ IMPORT IMAGES
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";

// 🎥 IMPORT VIDEO
import video1 from "../assets/12.mp4";

// ✅ UPDATED DATA
const galleryItems = [
  { id: 1, type: "image", src: img1 },
  { id: 2, type: "image", src: img2 },
  { id: 3, type: "image", src: img3 },
  { id: 4, type: "image", src: img4 },
  { id: 5, type: "image", src: img5 },
  { id: 6, type: "image", src: img6 },
  { id: 7, type: "image", src: img7 },
  { id: 8, type: "image", src: img8 },
  { id: 9, type: "image", src: img9 },
  { id: 10, type: "image", src: img10 },
  { id: 11, type: "image", src: img11 },
  { id: 12, type: "video", src: video1 },
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
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setSelected(item)}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="gallery" />
              ) : (
                <video src={item.src} muted />
              )}

              {/* OVERLAY */}
              <div className="gallery-overlay">
                <span>View {item.type === "image" ? "Image" : "Video"}</span>
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

          {selected.type === "image" ? (
            <img src={selected.src} alt="preview" className="modal-img" />
          ) : (
            <video
              src={selected.src}
              controls
              autoPlay
              className="modal-img"
            />
          )}
        </div>
      )}

    </div>
  );
}