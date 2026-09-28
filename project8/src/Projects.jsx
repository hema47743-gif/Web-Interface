import React from "react";

function Projects() {
  const projects = [
    {
      number: "01",
      icon: "🎓",
      title: "Student Management System",
      description:
        "A Java-based application designed to manage student information including student details, departments and academic records.",
      technologies: ["Java", "OOP", "ArrayList", "HashMap"]
    },
    {
      number: "02",
      icon: "🚗",
      title: "Vehicle Job Register",
      description:
        "A web application for managing vehicle service job cards, customer information and billing details in a simple digital system.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "SQLite"]
    },
    {
      number: "03",
      icon: "📋",
      title: "Attendance Tracker",
      description:
        "A React application that allows users to manage student attendance, mark students as present or absent and view attendance statistics.",
      technologies: ["React", "JavaScript", "CSS", "useState"]
    },
    {
      number: "04",
      icon: "📡",
      title: "Smart Scan Strategy",
      description:
        "A prototype concept for Smart India Hackathon focused on intelligent scanning and monitoring strategies for Electronic Warfare.",
      technologies: ["Python", "React", "API", "Dashboard"]
    },
    {
      number: "05",
      icon: "📊",
      title: "Data Science Projects",
      description:
        "Exploratory data analysis projects using Python, Pandas, NumPy, Matplotlib and Seaborn to understand and visualize datasets.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      number: "06",
      icon: "📝",
      title: "Smart To-Do List",
      description:
        "A responsive task management application with task creation, completion tracking, filtering, priority management and local storage.",
      technologies: ["React", "JavaScript", "CSS", "LocalStorage"]
    }
  ];

  return (
    <section className="section">

      <div className="section-heading">
        <p>WHAT I'VE BUILT</p>
        <h1>My <span>Projects</span></h1>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-icon">
                {project.icon}
              </span>
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology, i) => (
                <span key={i}>{technology}</span>
              ))}
            </div>

            <button className="project-link">
              View Project →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;