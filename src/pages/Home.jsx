import React from 'react';
import { InquiryForm } from '../components/InquiryForm';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Form Side-by-Side */}
      <section className="page-hero" style={{ padding: '100px 0', backgroundImage: 'linear-gradient(rgba(15, 76, 129, 0.85), rgba(15, 76, 129, 0.85)), url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          
          <div style={{ textAlign: 'left' }}>
            <h2 className="secondary-heading" style={{ color: 'var(--secondary)', marginBottom: '15px' }}>Shubham Dental Care Studio</h2>
            <h1 style={{ fontSize: '56px', lineHeight: '1.1' }}>Modern Dentistry.<br/>A More Confident Smile.</h1>
            <p style={{ maxWidth: '600px', margin: '30px 0', color: 'var(--bg-light)', fontSize: '20px', lineHeight: '1.6' }}>
              Personalized, premium dental care in Nikol, Ahmedabad. We combine advanced technology with luxurious Indian hospitality.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button className="btn btn-secondary">Explore Treatments</button>
            </div>
          </div>

          <div>
            <InquiryForm />
          </div>

        </div>
      </section>

      {/* Trust Section */}
      <section className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '20px' }}>India's #1 Premium Dental Experience</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', color: 'var(--text-dark)', lineHeight: '1.8' }}>
          Led by Dr. Bhavik Patel, our clinic is designed to provide world-class dental care in a relaxing, spa-like environment. 
          From routine checkups to complex dental implants, your comfort and health are our ultimate priority.
        </p>
      </section>
    </div>
  );
};

export default Home;
