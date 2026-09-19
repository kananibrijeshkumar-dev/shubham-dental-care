import React from 'react';

const Gallery = () => {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h2 className="secondary-heading">Transformations</h2>
          <h1>Smile Gallery</h1>
        </div>
      </section>
      <section className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', color: 'var(--text-dark)' }}>Real results from our real patients. Gallery images coming soon.</p>
      </section>
    </div>
  );
};
export default Gallery;
