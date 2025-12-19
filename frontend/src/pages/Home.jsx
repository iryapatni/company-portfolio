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

      {/* HERO */}
      <section className="home-hero">
        <h1>We Build Digital Products That Matter</h1>
        <p>
          Designing and developing scalable, user-focused web solutions for modern businesses.
        </p>
      </section>

      {/* VALUE / WHAT WE DO */}
      <section className="home-values">
        <div>
          <h3>Clean & Scalable</h3>
          <p>Well-structured applications built to grow with your business.</p>
        </div>
        <div>
          <h3>User Focused</h3>
          <p>Interfaces designed with usability and clarity in mind.</p>
        </div>
        <div>
          <h3>Reliable Delivery</h3>
          <p>Transparent communication and on-time delivery.</p>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="newsletter-cta">
            <div className="newsletter-text-block">
                <h2>Stay in the Loop</h2>
                <p>Occasional updates about our work and latest projects.</p>
                {status && <p className="newsletter-status">{status}</p>}
            </div>

            <form onSubmit={handleSubscribe}>
                <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button type="submit">Subscribe</button>
            </form>
            </section>

    </div>
  );
}


export default Home;
