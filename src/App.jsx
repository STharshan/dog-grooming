import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/Contact/Contact";
import BookCoursePage from "./pages/BookNow/BookNow";
import GalleryPage from "./pages/Gallery/Gallery";
import BlogPage from "./pages/Blog/Blog";
import About from "./pages/About/About";
import MainServices from "./pages/Services/Services";
import ScrollToTop from "./components/ScrollToTop";
import BookNowPage from "./pages/BookNow/BookNow";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<MainServices />} />
        <Route path="/bookcourse" element={<BookNowPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
