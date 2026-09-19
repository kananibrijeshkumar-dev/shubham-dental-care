import React from 'react';

export const InquiryForm = () => {
  return (
    <div className="inquiry-form">
      <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Request an Appointment</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', lineHeight: '1.6' }}>
        Fill out the form below and our scheduling coordinator will contact you to confirm your appointment.
      </p>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" className="form-control" placeholder="Enter first name" required />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" className="form-control" placeholder="Enter last name" required />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" className="form-control" placeholder="Enter phone number" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Enter email address" />
          </div>
        </div>

        <div className="form-group">
          <label>Reason for Visit / Treatment Interested In</label>
          <select className="form-control">
            <option>General Checkup & Cleaning</option>
            <option>Dental Implants</option>
            <option>Cosmetic Dentistry / Smile Makeover</option>
            <option>Invisalign / Braces</option>
            <option>Root Canal / Pain</option>
            <option>Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', marginTop: '10px' }}>
          Submit Request
        </button>
      </form>
    </div>
  );
};
