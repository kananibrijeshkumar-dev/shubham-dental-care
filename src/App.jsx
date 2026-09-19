import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Logo } from './components/Logo';
import Home from './pages/Home';
import FamilyDentistry from './pages/FamilyDentistry';
import About from './pages/About';
import Gallery from './pages/Gallery';
import PatientInfo from './pages/PatientInfo';
import Contact from './pages/Contact';
import DentalTourism from './pages/DentalTourism';

const Header = () => (
  <header className="glass-header">
    <div className="top-bar" style={{ backgroundColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">
          <Logo size={50} variant="light" />
        </Link>
        <div className="top-bar-contact">
          <div style={{ display: 'flex', gap: '15px', marginRight: '15px' }}>
            <a href="#" style={{ color: 'var(--secondary)' }}><Facebook size={22} /></a>
            <a href="#" style={{ color: 'var(--secondary)' }}><Instagram size={22} /></a>
            <a href="#" style={{ color: 'var(--secondary)' }}><MessageCircle size={22} /></a>
          </div>
          <span style={{ color: 'var(--text-light)' }}><MapPin size={20} color="var(--secondary)" /> Nikol, Ahmedabad</span>
          <span style={{ color: 'var(--text-light)' }}><Phone size={20} color="var(--secondary)" /> +91 98765 43210</span>
          <Link to="/contact" className="btn btn-secondary" style={{ padding: '12px 24px', marginLeft: '10px' }}>Request Appointment</Link>
        </div>
      </div>
    </div>
    
    <nav className="main-nav">
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Our Practice</Link></li>
          <li><Link to="/services/family-dentistry">Services</Link></li>
          <li><Link to="/dental-tourism">Dental Tourism</Link></li>
          <li><Link to="/gallery">Smile Gallery</Link></li>
          <li><Link to="/patient-info">Patient Info</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <Logo size={40} variant="light" className="mb-20" />
          <p>We specialize in general and cosmetic dentistry, offering dental implants, smile makeovers, and comprehensive care for the whole family in Ahmedabad.</p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <a href="#" style={{ color: 'var(--secondary)' }}><Facebook size={24} /></a>
            <a href="#" style={{ color: 'var(--secondary)' }}><Instagram size={24} /></a>
            <a href="#" style={{ color: 'var(--secondary)' }}><MessageCircle size={24} /></a>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/family-dentistry">Family Dentistry</Link></li>
            <li><Link to="/services/family-dentistry">Dental Implants</Link></li>
            <li><Link to="/services/family-dentistry">Cosmetic Dentistry</Link></li>
            <li><Link to="/dental-tourism">NRI & Dental Tourism</Link></li>
          </ul>
        </div>
        <div>
          <h4>Patient Info</h4>
          <ul>
            <li><Link to="/patient-info">New Patient Guidelines</Link></li>
            <li><Link to="/patient-info">Insurance & Financing</Link></li>
            <li><Link to="/gallery">Smile Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>
            51/52, 1st Floor, Poojan Complex<br/>
            Near Sukan Bunglow Road<br/>
            Opposite Rajhans Cinemas<br/>
            Nikol, Ahmedabad-380049<br/>
            Gujarat<br/>
            <br/>
            Phone: +91 98765 43210
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shubham Dental Care Studio. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const WhatsAppWidget = () => (
  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" style={{
    position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000,
    backgroundColor: '#25D366', color: 'white', width: '64px', height: '64px',
    borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
    boxShadow: '0 10px 25px rgba(37,211,102,0.4)', transition: 'all 0.3s'
  }}>
    <MessageCircle size={32} />
  </a>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/family-dentistry" element={<FamilyDentistry />} />
            <Route path="/dental-tourism" element={<DentalTourism />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/patient-info" element={<PatientInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
