import React from 'react';

const FamilyDentistry = () => {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h2 className="secondary-heading">Services</h2>
          <h1>Family Dentistry</h1>
        </div>
      </section>

      <section className="container" style={{ padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Comprehensive Care for Every Age</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
              We understand that finding a dentist who can treat your entire family is important. 
              At Shubham Dental, we offer family dentistry services tailored to patients of all ages, from toddlers to seniors.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Our preventative approach helps stop dental issues before they start. Regular checkups, professional cleanings, and patient education are the cornerstones of our family practice.
            </p>
            <ul style={{ margin: '30px 0 0 20px', fontSize: '18px', lineHeight: '1.8' }}>
              <li>Routine Exams & Cleanings</li>
              <li>Fluoride Treatments & Sealants</li>
              <li>Cavity Fillings</li>
              <li>Gum Disease Prevention</li>
            </ul>
          </div>
          <div>
            <div style={{ backgroundColor: '#F5F5F5', padding: '40px', borderRadius: '10px', borderTop: '5px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Why Choose Us?</h3>
              <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>We use the latest technology to ensure your visits are quick, painless, and effective.</p>
              <button className="btn btn-primary" style={{ width: '100%' }}>Schedule a Family Visit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyDentistry;
