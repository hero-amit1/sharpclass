import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import WhatsAppButton from "./component/WhatsAppButton.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Service.jsx";
import Gallery from "./pages/Gallery.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import Enroll from "./pages/Enroll.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";

export default function App() {
  return (
    <Router>
      {/* ✅ Navbar always visible */}
      <Navbar />

      {/* ✅ Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />

        {/* 🔥 Course Detail Page */}
        <Route path="/course/:slug" element={<CourseDetail />} />

        {/* 🔥 OPTIONAL: 404 PAGE */}
        <Route path="*" element={<h2 style={{padding: "100px", textAlign: "center"}}>404 Page Not Found</h2>} />
      </Routes>

      {/* ✅ Footer always visible */}
      <Footer />

      {/* ✅ Floating WhatsApp Button */}
      <WhatsAppButton />
    </Router>
  );
}