import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <section className="page-hero" style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="secondary-heading">Our Practice</motion.h2>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Meet the Team</motion.h1>
        </div>
      </section>
      
      <section className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '25px' }}>Excellence in Indian Dentistry</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '800px', margin: '0 auto', fontSize: '20px', lineHeight: '1.8' }}>
          Shubham Dental Care Studio is built on a foundation of clinical excellence and patient comfort. We combine advanced technology with a compassionate approach to deliver the absolute best in dental care.
        </motion.p>
      </section>

      {/* Team Grid */}
      <section className="container" style={{ padding: '0 20px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
          
          {/* Dr. Bhavik Patel */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ backgroundColor: 'var(--bg-light)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <div style={{ width: '100%', height: '400px', backgroundImage: 'url(/dr-bhavik.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Dr. Bhavik Patel</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '13px', marginBottom: '20px' }}>Lead Dental Surgeon</p>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.7', fontSize: '16px' }}>
                With over 18 years of clinical practice, Dr. Patel brings vast experience in dental implants and comprehensive cosmetic dentistry to Ahmedabad. He is highly sought after, frequently consulting with NRI clients and leading a successful dental tourism program for international patients.
              </p>
            </div>
          </motion.div>

          {/* Assistant Doctor 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ backgroundColor: 'var(--bg-light)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <div style={{ width: '100%', height: '400px', backgroundImage: 'url(/assistant.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Dr. Priya Sharma</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '13px', marginBottom: '20px' }}>Associate Dentist</p>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.7', fontSize: '16px' }}>Specializing in pediatric dentistry and endodontics, ensuring a pain-free experience for our younger patients.</p>
            </div>
          </motion.div>

          {/* Assistant Doctor 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ backgroundColor: 'var(--bg-light)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <div style={{ width: '100%', height: '400px', backgroundColor: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8', fontSize: '16px', letterSpacing: '1px' }}>PHOTO COMING SOON</span>
            </div>
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Join Our Team</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '13px', marginBottom: '20px' }}>Associate Dentist</p>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.7', fontSize: '16px' }}>We are expanding our premium practice. Inquire within to join India's fastest growing dental team.</p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
export default About;
