import React from 'react';

const PatientInfo = () => {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h2 className="secondary-heading">For Our Patients</h2>
          <h1>Patient Information</h1>
        </div>
      </section>
      <section className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '30px', color: 'var(--primary)', marginBottom: '20px' }}>New Patient Guidelines</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.8' }}>
          We welcome new patients to Shubham Dental Care Studio. Please bring any previous dental records and a list of current medications to your first appointment.
        </p>
      </section>
    </div>
  );
};
export default PatientInfo;
