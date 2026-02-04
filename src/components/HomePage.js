import React from "react";
import { useNavigate } from "react-router-dom";
import anantapurImg from "../assets/anantapur.jpg";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Digital Land Records – Anantapuram District</h1>
          <p>
            A secure and transparent platform to access land ownership
            and property records in Anantapuram district.
          </p>

          {/* Navigate to Services page */}
          <button onClick={() => navigate("/services")}>
            View Land Records
          </button>
        </div>

        <div className="hero-image">
          <img src={anantapurImg} alt="Anantapuram District" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What You Can Do</h2>
        <div className="feature-cards">
          <div className="card">📄 View Land Ownership Details</div>
          <div className="card">🔍 Search by Survey Number</div>
          <div className="card">🏘️ Check Village & Mandal Records</div>
          <div className="card">⬇️ Download Land Documents</div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why">
        <h2>Why Digital Land Records?</h2>
        <p>
          Traditional land records in Anantapuram district are mostly
          paper-based and time-consuming to access. This digital system
          helps reduce delays, prevent data loss, and improve transparency
          for citizens.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Digital Land Records – Anantapuram District</p>
      </footer>

    </div>
  );
}

export default HomePage;
