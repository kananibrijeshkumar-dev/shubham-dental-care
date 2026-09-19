import React from 'react';
import { InquiryForm } from '../components/InquiryForm';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Form Side-by-Side */}
      <section className="page-hero" style={{ padding: '120px 0', backgroundImage: 'linear-gradient(rgba(15, 76, 129, 0.75), rgba(15, 76, 129, 0.95)), url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: 'left' }}
          >
            <h2 className="secondary-heading" style={{ color: 'var(--secondary)', marginBottom: '20px' }}>Shubham Dental Care Studio</h2>
            <h1 style={{ fontSize: '64px', lineHeight: '1.1' }}>Modern Dentistry.<br/>A More Confident Smile.</h1>
            <p style={{ maxWidth: '600px', margin: '35px 0', color: 'rgba(255,255,255,0.9)', fontSize: '22px', lineHeight: '1.6' }}>
              Personalized, premium dental care in Nikol, Ahmedabad. We combine advanced clinical technology with luxurious Indian hospitality.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn btn-secondary">Explore Treatments</button>
              <button className="btn btn-primary" style={{ backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.3)' }}>Meet The Team</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <InquiryForm />
          </motion.div>

        </div>
      </section>

      {/* Trust Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container" style={{ padding: '120px 20px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '45px', color: 'var(--primary)', marginBottom: '25px' }}>India's #1 Premium Dental Experience</h2>
        <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '20px', color: 'var(--text-dark)', lineHeight: '1.9' }}>
          Led by Dr. Bhavik Patel, our clinic is designed to provide world-class dental care in a relaxing, spa-like environment. 
          From routine checkups to complex dental implants, your comfort and health are our ultimate priority.
        </p>
      </motion.section>
    </div>
  );
};

export default Home;
