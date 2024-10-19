import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Mock data

const MainContent = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent(data); // Mock data will be loaded here
  }, []);

  return (
    <main className="container mx-auto p-4">
      {/* Founder’s Message */}
      <section id="about" className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Founder’s Message</h2>
        <p>{content.founderMessage}</p>
      </section>

      {/* Treatment Focus */}
      <section id="services" className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Treatment Focus</h2>
        <ul>
          {content.services?.map((service, index) => (
            <li key={index} className="mb-2">{service}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mb-8">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <ul>
          {content.testimonials?.map((testimonial, index) => (
            <li key={index} className="mb-4">
              <blockquote>
                <p>“{testimonial.message}”</p>
                <footer>- {testimonial.name}</footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
