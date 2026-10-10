
import "./App.css";

const projects = [
  { id: 1, name: "Project 1", category: "Web Development", url: "https://counter1-app-git-main-hema47743-gif.vercel.app/" },
  { id: 2, name: "Project 2", category: "Web Development", url: "https://student-profile-card-mzfsbo4n2-hema47743-gif.vercel.app/" },
  { id: 3, name: "Project 3", category: "Web Development", url: "https://student-dashboard-mu-olive.vercel.app/" },
  { id: 4, name: "Project 4", category: "Web Development", url: "https://hobby-cards-q1xpenj8d-hema47743-gif.vercel.app/" },
  { id: 5, name: "Project 5", category: "Web Development", url: "https://calculator-lyart-five-14.vercel.app/" },
  { id: 6, name: "Project 6", category: "Web Development", url: "https://attendance-tracker-eight-gilt.vercel.app/" },
  { id: 7, name: "Project 7", category: "Web Development", url: "https://forms-validation-eight.vercel.app/" },
  { id: 8, name: "Project 8", category: "Web Development", url: "https://student-portfolio-orcin.vercel.app/" },
  { id: 9, name: "Project 9", category: "Web Development", url: "https://to-do-app-steel-three.vercel.app/" },
  { id: 10, name: "Project 10", category: "Web Development", url: "https://student-report-card-omega.vercel.app/" },
];

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <a href="#" className="logo">H<span>.</span></a>
        <span className="nav-label">MY PROJECT SPACE</span>
        <a className="github-link" href="https://github.com/hema47743-gif/Web-Interface" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>

      <header className="hero">
        <p className="eyebrow">MY DEVELOPMENT COLLECTION</p>
        <h1>Web Interface<br /><span>Projects.</span></h1>
        <p className="description">
          Explore my collection of web projects, experiments,
          and applications built with code and creativity.
        </p>
        <a href="#projects" className="explore-btn">
          Explore Projects <span>↓</span>
        </a>
      </header>

      <section id="projects" className="projects-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE COLLECTION</p>
            <h2>Featured Projects</h2>
          </div>
          <p className="project-count">10 PROJECTS / 2026</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="card-top">
                <span className="project-number">
                  {String(project.id).padStart(2, "0")}
                </span>
                
              </div>

              <div className="card-content">
                <p className="category">{project.category}</p>
                <h3>{project.name}</h3>
                <a
                  className="view-link"
                  href={project.url.startsWith("https://")
                    ? project.url
                    : undefined}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => {
                    if (!project.url.startsWith("https://")) {
                      event.preventDefault();
                      alert("Please add this project's Vercel URL in App.jsx.");
                    }
                  }}
                >
                  View Project <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>Built with React</span>
        <span>© 2026 · My Project Space</span>
      </footer>
    </main>
  );
}

export default App;
