import { useState, useEffect } from "react";
import "../css/Gallery.css";
import { motion, AnimatePresence } from "framer-motion";

// ✅ IMPORT IMAGES
import img1 from "../assets/1.webp";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/14.jpeg";

// 🎥 IMPORT VIDEO
import video1 from "../assets/12.mp4";

// ✅ GALLERY DATA
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
  { id: 13, type: "image", src: img12 },
];

export default function Gallery() {

  // ✅ Scroll To Top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [selected, setSelected] = useState(null);

  // 🔥 Animations
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <div className="gallery">

      {/* 🔥 HERO */}
      <div className="gallery-hero">

        <div className="overlay"></div>

        <motion.div
          className="gallery-hero-content"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >

          <h1>Our Gallery</h1>

          <p>
            Explore our classes,
            events, achievements,
            and student moments.
          </p>

        </motion.div>

      </div>

      {/* 🔥 GALLERY CONTAINER */}
      <div className="gallery-container">

        <motion.div
          className="gallery-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {galleryItems.map((item, index) => (

            <motion.div
              key={item.id}
              className="gallery-item"
              variants={fadeUp}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.03,
              }}
              onClick={() => setSelected(item)}
            >

              {item.type === "image" ? (

                <img
                  src={item.src}
                  alt={`gallery-${item.id}`}
                  loading="lazy"
                />

              ) : (

                <video
                  src={item.src}
                  muted
                />

              )}

              {/* 🔥 OVERLAY */}
              <div className="gallery-overlay">

                <span>
                  {item.type === "image"
                    ? "🖼 View Image"
                    : "🎥 Play Video"}
                </span>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>

        {selected && (

          <motion.div
            className="gallery-modal"
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}
          >

            {/* CLOSE BUTTON */}
            <button
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* CONTENT */}
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.8,
                opacity: 0,
              }}

              transition={{
                duration: 0.3,
              }}
            >

              {selected.type === "image" ? (

                <img
                  src={selected.src}
                  alt="preview"
                  className="modal-img"
                />

              ) : (

                <video
                  src={selected.src}
                  controls
                  autoPlay
                  className="modal-img"
                />

              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}