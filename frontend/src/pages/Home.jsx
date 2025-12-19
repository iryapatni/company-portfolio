import { useState } from "react";
import api from "../services/api";
import AdminLinks from "../components/AdminLinks";


function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubscribe(e) {
    e.preventDefault();
    setStatus("Subscribing...");

    try {
      await api.post("/newsletter", { email });
      setStatus("Subscribed successfully");
      setEmail("");
    } catch {
      setStatus("You are already subscribed or something went wrong");
    }
  }

  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <section className="home-hero">
        <span className="hero-badge">Digital Product Studio</span>

        <h1>
          We build <span>scalable</span> digital products
          <br /> for modern businesses
        </h1>

        <p>
          From concept to production, we design and develop reliable,
          user-centric web applications that scale with your business.
        </p>
      </section>

      {/* ===== VALUES ===== */}
      <section className="home-values">
        <div className="value-card">
          <h3>Clean Architecture</h3>
          <p>
            Well-structured codebases following industry best practices for
            scalability and long-term maintainability.
          </p>
        </div>

        <div className="value-card">
          <h3>User-Focused Design</h3>
          <p>
            Thoughtful interfaces designed for clarity, usability, and seamless
            user experience across devices.
          </p>
        </div>

        <div className="value-card">
          <h3>Reliable Delivery</h3>
          <p>
            Transparent communication, predictable timelines, and solutions
            delivered with quality and consistency.
          </p>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter-cta">
        <div className="newsletter-text-block">
          <h2>Stay updated</h2>
          <p>
            Get occasional updates about our work, case studies, and new
            projects. No spam.
          </p>

          {status && <p className="newsletter-status">{status}</p>}
        </div>

        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      {/* TEMP ADMIN ACCESS — REMOVE BEFORE FINAL SUBMISSION */}
        <div style={{ marginBottom: "40px" }}>
        <AdminLinks />
        </div>

    </div>
  );
}

export default Home;
