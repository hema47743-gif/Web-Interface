import React from "react";

function About() {
  return (
    <section className="section about-section">

      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h1>About <span>Me</span></h1>
      </div>

      <div className="about-grid">

        <div className="about-text">
          <h2>
            A student who loves to <span>build & learn.</span>
          </h2>

          <p>
            I am Hemamalini G, a Computer Science and Engineering
            student specializing in Cyber Security. I am interested
            in software development, web development and security
            technologies.
          </p>

          <p>
            I enjoy turning ideas into working applications using
            Java, Python, JavaScript and React. I also like exploring
            Data Structures, databases and modern web technologies.
          </p>

          <p>
            My goal is to continuously improve my technical skills,
            work on meaningful projects and gain practical experience
            in the software and cybersecurity field.
          </p>
        </div>

        <div className="about-cards">

          <div className="info-card">
            <div className="info-icon">💻</div>
            <h3>Development</h3>
            <p>
              Building responsive and user-friendly web applications.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">🔐</div>
            <h3>Cyber Security</h3>
            <p>
              Exploring security concepts and secure technologies.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">📚</div>
            <h3>Continuous Learning</h3>
            <p>
              Always learning new tools, technologies and concepts.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">🚀</div>
            <h3>Problem Solving</h3>
            <p>
              Practicing programming and Data Structures regularly.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;