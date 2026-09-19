import React from 'react';
import { InquiryForm } from '../components/InquiryForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h2 className="secondary-heading">Get In Touch</h2>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="container" style={{ padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          
          <div>
            <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>We'd Love to Hear From You</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', fontSize: '18px', color: 'var(--text-dark)' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <MapPin color="var(--secondary)" size={28} />
                <div>
                  <strong>Clinic Location</strong>
                  <p>51/52, 1st Floor, Poojan Complex<br/>Near Sukan Bunglow Road<br/>Opposite Rajhans Cinemas<br/>Nikol, Ahmedabad-380049<br/>Gujarat</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Phone color="var(--secondary)" size={28} />
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Clock color="var(--secondary)" size={28} />
                <div>
                  <strong>Clinic Hours</strong>
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <InquiryForm />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
