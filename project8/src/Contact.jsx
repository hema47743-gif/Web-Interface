import React, { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all the fields.");
      return;
    }

    alert("Thank you! Your message has been submitted.");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="section contact-section">

      <div className="section-heading">
        <p>LET'S CONNECT</p>
        <h1>Contact <span>Me</span></h1>
      </div>

      <div className="contact-grid">

        <div className="contact-info">

          <h2>Let's build something together.</h2>

          <p>
            If you would like to discuss a project, internship,
            collaboration or simply connect with me, feel free
            to send me a message.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <small>Email</small>
              <p>hema@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📱</span>
            <div>
              <small>Phone</small>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <small>Location</small>
              <p>India</p>
            </div>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <label>Your Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Your Message</label>

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;