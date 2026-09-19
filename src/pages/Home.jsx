import React from 'react';
import { Link } from 'react-router-dom';
import { InquiryForm } from '../components/InquiryForm';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Clean Hero Section without the Form */}
      <section className="page-hero" style={{ padding: '0', backgroundImage: 'linear-gradient(rgba(15, 76, 129, 0.6), rgba(15, 76, 129, 0.9)), url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ width: '100%' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
          >
            <h2 className="secondary-heading" style={{ color: 'var(--secondary)', marginBottom: '20px' }}>Shubham Dental Care Studio</h2>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: '1.2' }}>Modern Dentistry.<br/>A More Confident Smile.</h1>
            <p style={{ margin: '30px auto', color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: '1.6', maxWidth: '700px' }}>
              Led by Dr. Bhavik Patel (18 Years of Excellence). Personalized, premium dental care in Nikol, Ahmedabad for local and NRI clients.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#appointment" className="btn btn-secondary">Book Appointment</a>
              <Link to="/about" className="btn btn-primary" style={{ backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.4)' }}>Meet Dr. Patel</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Clinic Experience Section (Using User Uploaded Images) */}
      <section className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 45px)', color: 'var(--primary)', marginBottom: '15px' }}>The Shubham Experience</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 50px', fontSize: '18px', color: 'var(--text-dark)' }}>Experience world-class dental treatments in a highly sterilized, comfortable, and state-of-the-art clinic right here in Ahmedabad.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { img: '/clinic-2.png', delay: 0 },
            { img: '/clinic-3.png', delay: 0.1 },
            { img: '/clinic-4.png', delay: 0.2 },
            { img: '/clinic-5.png', delay: 0.3 }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: item.delay }}
              style={{ 
                width: '100%', 
                paddingTop: '150%', // Aspect ratio for vertical stories
                backgroundImage: `url(${item.img})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ backgroundColor: 'var(--primary)', padding: '100px 0', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 45px)' }}>What Our Patients Say</h2>
            <p style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1px' }}>OVER 500+ 5-STAR GOOGLE REVIEWS</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { name: "Rahul S.", text: "The most premium dental experience I've ever had in Ahmedabad. Dr. Bhavik is incredibly skilled and the clinic feels like a luxury hotel. Completely painless root canal!" },
              { name: "Priya M.", text: "I traveled from London specifically for my dental implants here. The team arranged everything perfectly and the quality of care was world-class at a fraction of the cost." },
              { name: "Amit K.", text: "Finally found a family dentist we trust. My kids used to be terrified of the dentist, but the gentle approach here completely changed their minds. Highly recommend!" }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="testimonial-card"
              >
                <div className="stars">★★★★★</div>
                <p style={{ color: 'var(--text-dark)', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px', fontStyle: 'italic' }}>"{review.text}"</p>
                <h4 style={{ color: 'var(--primary)', fontSize: '18px' }}>- {review.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section Moved to Bottom */}
      <section id="appointment" className="container" style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--primary)', marginBottom: '15px' }}>Ready for a Better Smile?</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-dark)' }}>Book your consultation with Dr. Bhavik Patel today.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <InquiryForm />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
