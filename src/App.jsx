import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OurWork from './pages/OurWork.jsx'
import Gallery from './pages/Gallery.jsx'
import SupportUs from './pages/SupportUs.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* Warm floating background shapes */}
      <div className="floating-shapes" aria-hidden="true">
        <span className="shape shape-1" />
        <span className="shape shape-2" />
        <span className="shape shape-3" />
      </div>

      <ScrollToTop />
      <Navbar />

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  )
}
