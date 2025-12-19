import { useState } from "react";
import api from "../services/api";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await api.post("/contact", formData);
      setStatus("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-description">
          Have a query or want to work with us? Drop us a message.
        </p>
      </div>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We’d love to hear from you. Reach out for collaborations,
          projects, or any queries.
        </p>

        <ul className="contact-details">
          <li><strong>Address:</strong> Indore, Madhya Pradesh, India</li>
          <li><strong>Email:</strong> contact@company.com</li>
          <li><strong>Phone:</strong> +91 98765 43210</li>
        </ul>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-textarea"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="form-button">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
