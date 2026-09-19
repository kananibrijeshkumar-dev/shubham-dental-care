import React from 'react';

const About = () => {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h2 className="secondary-heading">Our Practice</h2>
          <h1>Meet the Team</h1>
        </div>
      </section>
      
      <section className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--primary)', marginBottom: '20px' }}>Excellence in Indian Dentistry</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.8' }}>
          Shubham Dental Care Studio is built on a foundation of clinical excellence and patient comfort. We combine advanced technology with a compassionate approach to deliver the absolute best in dental care.
        </p>
      </section>

      {/* Team Grid */}
      <section className="container" style={{ padding: '0 20px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* Dr. Bhavik Patel */}
          <div style={{ backgroundColor: 'var(--bg-gray)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '100%', height: '350px', backgroundColor: '#e2e8f0', backgroundImage: 'url(https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Dr. Bhavik Patel</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '15px' }}>Lead Dental Surgeon</p>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Dr. Patel brings years of advanced training in dental implants and comprehensive cosmetic dentistry to Ahmedabad.</p>
            </div>
          </div>

          {/* Assistant Doctor 1 */}
          <div style={{ backgroundColor: 'var(--bg-gray)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '100%', height: '350px', backgroundColor: '#cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8' }}>Image Placeholder</span>
            </div>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Coming Soon</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '15px' }}>Assistant Doctor</p>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Bio coming soon.</p>
            </div>
          </div>

          {/* Assistant Doctor 2 */}
          <div style={{ backgroundColor: 'var(--bg-gray)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '100%', height: '350px', backgroundColor: '#cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8' }}>Image Placeholder</span>
            </div>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Coming Soon</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '15px' }}>Assistant Doctor</p>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Bio coming soon.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
export default About;
