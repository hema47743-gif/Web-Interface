import React from "react";

function Skills() {
  const skills = [
    {
      icon: "☕",
      name: "Java",
      level: "Intermediate",
      percentage: "80%"
    },
    {
      icon: "🐍",
      name: "Python",
      level: "Intermediate",
      percentage: "75%"
    },
    {
      icon: "⚛️",
      name: "React",
      level: "Intermediate",
      percentage: "70%"
    },
    {
      icon: "🌐",
      name: "HTML & CSS",
      level: "Advanced",
      percentage: "85%"
    },
    {
      icon: "🟨",
      name: "JavaScript",
      level: "Intermediate",
      percentage: "75%"
    },
    {
      icon: "🗄️",
      name: "SQL",
      level: "Intermediate",
      percentage: "70%"
    },
    {
      icon: "📊",
      name: "Data Structures",
      level: "Intermediate",
      percentage: "75%"
    },
    {
      icon: "🔐",
      name: "Cyber Security",
      level: "Learning",
      percentage: "60%"
    }
  ];

  return (
    <section className="section">

      <div className="section-heading">
        <p>WHAT I WORK WITH</p>
        <h1>My <span>Skills</span></h1>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-top">
              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.percentage }}
              ></div>
            </div>

            <span className="percentage">
              {skill.percentage}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;