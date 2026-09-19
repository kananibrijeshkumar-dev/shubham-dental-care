import React from 'react';
import { InquiryForm } from '../components/InquiryForm';
import { motion } from 'framer-motion';

const DentalTourism = () => {
  return (
    <div>
      <section className="page-hero" style={{ padding: '120px 0', backgroundImage: 'linear-gradient(rgba(15, 76, 129, 0.8), rgba(15, 76, 129, 0.95)), url(/tourism.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="secondary-heading">NRI & International Patient Center</motion.h2>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: '55px' }}>Dental Tourism in Incredible India</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ maxWidth: '800px', margin: '20px auto 0', fontSize: '22px', color: 'rgba(255,255,255,0.9)' }}>
            World-class healthcare meets Incredible India with treatment planning, travel support, and trusted care coordination in Gujarat.
          </motion.p>
        </div>
      </section>

      <section className="container" style={{ padding: '100px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '40px', marginBottom: '30px' }}>Fast Planning Snapshot</h2>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '20px', lineHeight: '2.2', color: 'var(--text-dark)' }}>
              <li><strong style={{ color: 'var(--secondary)' }}>✓</strong> Zoom / Google Meet pre-travel consultation</li>
              <li><strong style={{ color: 'var(--secondary)' }}>✓</strong> Affordable, World-Class Dental Packages</li>
              <li><strong style={{ color: 'var(--secondary)' }}>✓</strong> Hospital specialist network</li>
              <li><strong style={{ color: 'var(--secondary)' }}>✓</strong> Travel concierge & lodging assistance</li>
              <li><strong style={{ color: 'var(--secondary)' }}>✓</strong> WhatsApp single-point support</li>
            </ul>

            <h2 style={{ fontSize: '34px', marginTop: '50px', marginBottom: '25px', color: 'var(--primary)' }}>Why Ahmedabad, Gujarat?</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.9' }}>
              Ahmedabad is emerging as India's premier medical hub. Get your complex dental implants, full mouth restorations, and cosmetic smile makeovers completed by Dr. Bhavik Patel at a fraction of the cost you would pay in the US, UK, or Australia—while enjoying the rich heritage, incredible food, and luxurious hospitality of Gujarat.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <InquiryForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DentalTourism;
