import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  // Form state (frontend only)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo action (no backend)
    alert("Your message has been submitted successfully!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      {/* Contact Info */}
      <section className="contact-section">
        <h2>Digital Land Records – Anantapuram</h2>
        <p>
          For queries related to land records, ownership details, or corrections,
          please contact us using the form below.
        </p>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Google Map */}
      <section className="contact-section">
        <h2>Office Location</h2>

        <div className="map-container">
          <iframe
            title="Anantapur Land Records Office"
            src="https://www.google.com/maps?q=Anantapur%20Andhra%20Pradesh&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Note */}
      <section className="contact-section">
        <p className="note">
          ⚠️ This contact form is for demo purposes only. In a real system,
          messages would be stored and processed through a backend server.
        </p>
      </section>
    </div>
  );
}

export default Contact;
