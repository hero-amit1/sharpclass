import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import WhatsAppButton from "./component/WhatsAppButton.jsx"; // ✅ ADD THIS

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Service.jsx";
import Gallery from "./pages/Gallery.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import Enroll from "./pages/Enroll.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>

      <Footer />

      {/* ✅ FLOATING WHATSAPP BUTTON (GLOBAL) */}
      <WhatsAppButton />
    </Router>
  );
}