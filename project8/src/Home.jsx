import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">

        <p className="welcome">
          👋 WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Hemamalini</span>
        </h1>

        <h2>
          Computer Science & Cyber Security Student
        </h2>

        <p className="home-description">
          I am a passionate Computer Science student who enjoys
          building web applications, solving programming problems
          and exploring cybersecurity technologies.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="primary-btn">
            View My Projects →
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>

        <div className="quick-info">
          <div>
            <strong>Java</strong>
            <span>Programming</span>
          </div>

          <div>
            <strong>React</strong>
            <span>Web Development</span>
          </div>

          <div>
            <strong>Cyber</strong>
            <span>Security</span>
          </div>
        </div>

      </div>

      <div className="hero-card">
        <div className="profile-circle">
          HG
        </div>

        <h3>Hemamalini G</h3>
        <p>CSE • Cyber Security</p>

        <div className="status">
          <span></span>
          Available for learning & opportunities
        </div>
      </div>
    </section>
  );
}

export default Home;