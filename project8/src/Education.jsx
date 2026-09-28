import React from "react";

function Education() {
  return (
    <section className="section">

      <div className="section-heading">
        <p>MY ACADEMIC JOURNEY</p>
        <h1>My <span>Education</span></h1>
      </div>

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-dot">
            🎓
          </div>

          <div className="education-card">

            <span className="education-year">
              2024 - Present
            </span>

            <h2>
              B.E. Computer Science and Engineering
            </h2>

            <h3>
              Prince Dr. K. Vasudevan College of Engineering
              and Technology
            </h3>

            <p>
              Specialization: <strong>Cyber Security</strong>
            </p>

            <p>
              Currently pursuing my undergraduate degree and
              developing skills in programming, web development,
              databases, Data Structures and cybersecurity.
            </p>

            <div className="education-tags">
              <span>CSE</span>
              <span>Cyber Security</span>
              <span>II Year</span>
            </div>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-dot">
            📚
          </div>

          <div className="education-card">

            <span className="education-year">
              Higher Secondary
            </span>

            <h2>Higher Secondary Education</h2>

            <p>
              Completed higher secondary education and developed
              an interest in computer science and technology.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;