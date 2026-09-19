import React from 'react';

export const InquiryForm = () => {
  return (
    <div className="inquiry-form glass-panel" style={{ background: 'rgba(255,255,255,0.95)' }}>
      <h3 style={{ fontSize: '28px', marginBottom: '15px', color: 'var(--primary)' }}>Request an Appointment</h3>
      <p style={{ color: 'var(--text-dark)', marginBottom: '30px', lineHeight: '1.6', fontSize: '15px' }}>
        Fill out the form below and our scheduling coordinator will contact you shortly.
      </p>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" className="form-control" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" className="form-control" placeholder="Last name" required />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" className="form-control" placeholder="Phone number" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Email address" />
          </div>
        </div>

        <div className="form-group">
          <label>Reason for Visit</label>
          <select className="form-control">
            <option>General Checkup & Cleaning</option>
            <option>Dental Implants</option>
            <option>Cosmetic Dentistry / Smile Makeover</option>
            <option>Invisalign / Braces</option>
            <option>Root Canal / Pain</option>
            <option>Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
          Submit Request
        </button>
      </form>
    </div>
  );
};
