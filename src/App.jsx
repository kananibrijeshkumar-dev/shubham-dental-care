import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Logo } from './components/Logo';
import Home from './pages/Home';
import FamilyDentistry from './pages/FamilyDentistry';
import About from './pages/About';
import Gallery from './pages/Gallery';
import PatientInfo from './pages/PatientInfo';
import Contact from './pages/Contact';
import DentalTourism from './pages/DentalTourism';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass-header">
      <div className="top-bar">
        <div className="container">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <Logo size={40} variant="light" />
          </Link>
          
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="top-bar-contact">
            <div style={{ display: 'flex', gap: '15px', marginRight: '15px' }}>
              <a href="#" style={{ color: 'var(--secondary)' }}><Facebook size={22} /></a>
              <a href="#" style={{ color: 'var(--secondary)' }}><Instagram size={22} /></a>
              <a href="#" style={{ color: 'var(--secondary)' }}><Linkedin size={22} /></a>
            </div>
            <span style={{ color: 'var(--text-light)' }}><MapPin size={18} color="var(--secondary)" /> Nikol, Ahmedabad</span>
            <span style={{ color: 'var(--text-light)' }}><Phone size={18} color="var(--secondary)" /> +91 9725698310</span>
            <span style={{ color: 'var(--text-light)' }}><Mail size={18} color="var(--secondary)" /> info@shubhamdental.com</span>
          </div>
        </div>
      </div>
      
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>Our Practice</Link></li>
            <li><Link to="/services/family-dentistry" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/dental-tourism" onClick={() => setMenuOpen(false)}>Dental Tourism</Link></li>
            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Smile Gallery</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

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
            <a href="#" style={{ color: 'var(--secondary)' }}><Linkedin size={24} /></a>
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
            Phone: +91 9725698310<br/>
            Email: info@shubhamdental.com
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
  <a href="https://wa.me/919725698310" target="_blank" rel="noreferrer" style={{
    position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000,
    backgroundColor: '#25D366', color: 'white', width: '60px', height: '60px',
    borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
    boxShadow: '0 10px 25px rgba(37,211,102,0.4)', transition: 'all 0.3s'
  }}>
    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
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
