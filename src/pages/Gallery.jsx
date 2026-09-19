import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <div>
      <section className="page-hero" style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="secondary-heading">Transformations</motion.h2>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Smile Gallery</motion.h1>
        </div>
      </section>

      <section className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', color: 'var(--text-dark)', maxWidth: '700px', margin: '0 auto 50px' }}>
          Real results from our real patients. See how Dr. Bhavik Patel and our expert team have transformed the lives of our patients through advanced cosmetic dentistry and implants.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* Patient 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ backgroundColor: 'var(--bg-light)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <div style={{ width: '100%', height: '350px', backgroundImage: 'url(/gallery-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '30px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', color: 'var(--primary)' }}>Cosmetic Veneers & Whitening</h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6', fontSize: '15px' }}>This young professional wanted a brighter, perfectly aligned smile. We utilized custom porcelain veneers to deliver a stunning, natural-looking result.</p>
            </div>
          </motion.div>

          {/* Patient 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ backgroundColor: 'var(--bg-light)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <div style={{ width: '100%', height: '350px', backgroundImage: 'url(/gallery-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '30px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', color: 'var(--primary)' }}>Full Arch Dental Implants</h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6', fontSize: '15px' }}>After struggling with missing teeth for years, this patient received complete upper and lower dental implants, restoring full chewing function and confidence.</p>
            </div>
          </motion.div>

          {/* Patient 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ backgroundColor: 'var(--bg-light)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <div style={{ width: '100%', height: '350px', backgroundImage: 'url(/gallery-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '30px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', color: 'var(--primary)' }}>Complete Denture Restoration</h3>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6', fontSize: '15px' }}>A beautiful transformation for this grandmother. Custom-fitted premium dentures provided her with a comfortable, radiant smile that looks 100% natural.</p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
export default Gallery;
