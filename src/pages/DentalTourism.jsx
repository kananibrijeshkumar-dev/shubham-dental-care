import React from 'react';
import { InquiryForm } from '../components/InquiryForm';

const DentalTourism = () => {
  return (
    <div>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(15, 76, 129, 0.9), rgba(15, 76, 129, 0.9)), url(https://images.unsplash.com/photo-1598418086053-fc5e098cb423?q=80&w=2000&auto=format&fit=crop)', backgroundSize: 'cover' }}>
        <div className="container">
          <h2 className="secondary-heading">NRI & International Patient Center</h2>
          <h1>Dental Tourism in Incredible India</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '20px' }}>
            World-class healthcare meets Incredible India with treatment planning, travel support, and trusted care coordination in Gujarat.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }}>
          <div>
            <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Fast Planning Snapshot</h2>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '18px', lineHeight: '2', color: 'var(--text-dark)' }}>
              <li>✓ Zoom / Google Meet pre-travel consultation</li>
              <li>✓ Affordable, World-Class Dental Packages</li>
              <li>✓ Hospital specialist network</li>
              <li>✓ Travel concierge & lodging assistance</li>
              <li>✓ WhatsApp single-point support</li>
            </ul>

            <h2 style={{ fontSize: '30px', marginTop: '40px', marginBottom: '20px', color: 'var(--primary)' }}>Why Ahmedabad, Gujarat?</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Ahmedabad is emerging as India's premier medical hub. Get your complex dental implants, full mouth restorations, and cosmetic smile makeovers completed by Dr. Bhavik Patel at a fraction of the cost you would pay in the US, UK, or Australia—while enjoying the rich heritage of Gujarat.
            </p>
          </div>
          <div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalTourism;
