import { Routes, Route, NavLink, Link, useParams } from "react-router-dom";
import { student, semesters, summarize, overallSummary } from "./ReportData";
import "./ReportCard.css";

/* ---------- Shared pieces ---------- */

function Navbar() {
  return (
    <nav className="navbar no-print">
      <h2>Student Report Card</h2>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        {semesters.map((s) => (
          <NavLink key={s.id} to={`/semester/${s.id}`}>Sem {s.id}</NavLink>
        ))}
        <NavLink to="/overall">Overall</NavLink>
      </div>
    </nav>
  );
}

function CollegeHeader({ title }) {
  const initials = student.name.split(" ").map((w) => w[0]).join("");
  return (
    <header className="college-header">
      <h1>{student.college}</h1>
      <h3>Department of Computer Science and Engineering</h3>
      <p>{title}</p>
      <div className="student-strip">
        <div className="photo" aria-label="Student photo">{initials}</div>
        <div className="strip-col">
          <p><b>Name:</b> {student.name}</p>
          <p><b>Register No:</b> {student.regNo}</p>
          <p><b>Department:</b> {student.department}</p>
        </div>
        <div className="strip-col">
          <p><b>Programme:</b> {student.programme}</p>
          <p><b>Batch:</b> {student.batch}</p>
          <p><b>Current Semester:</b> {student.currentSem}</p>
        </div>
      </div>
    </header>
  );
}

function Signatures() {
  return (
    <div className="signatures">
      {["Class Advisor", "HOD", "Principal"].map((r) => (
        <div key={r}>
          <p>____________________</p>
          <b>{r}</b>
        </div>
      ))}
    </div>
  );
}

const PrintButton = () => (
  <button className="print-btn no-print" onClick={() => window.print()}>
    Print / Save as PDF
  </button>
);

/* ---------- Home ---------- */

function Home() {
  const o = overallSummary();
  return (
    <>
      <CollegeHeader title="STUDENT REPORT CARD" />

      <section className="card">
        <h2>Student Profile</h2>
        <div className="profile-grid">
          <p><b>Student Name:</b> {student.name}</p>
          <p><b>Register Number:</b> {student.regNo}</p>
          <p><b>Gender:</b> {student.gender}</p>
          <p><b>Date of Birth:</b> {student.dob}</p>
          <p><b>Department:</b> {student.department}</p>
          <p><b>Programme:</b> {student.programme}</p>
          <p><b>Batch:</b> {student.batch}</p>
          <p><b>Status:</b> {student.status}</p>
        </div>
      </section>

      <section className="card">
        <h2>Academic Summary</h2>
        <div className="stat-grid">
          <Stat value={o.sems.length} label="Semesters" />
          <Stat value={o.cgpa.toFixed(2)} label="CGPA" />
          <Stat value={o.earned} label="Credits Earned" />
          <Stat value={o.arrears} label="Arrears" />
        </div>
      </section>

      <section className="card">
        <h2>View Semester Report</h2>
        <div className="semester-links">
          {o.sems.map((s) => (
            <Link key={s.id} to={`/semester/${s.id}`}>
              {s.name}
              <span>SGPA {s.sgpa.toFixed(2)}</span>
            </Link>
          ))}
          <Link to="/overall" className="accent">
            Overall Report
            <span>CGPA {o.cgpa.toFixed(2)}</span>
          </Link>
        </div>
      </section>
    </>
  );
}

const Stat = ({ value, label }) => (
  <div className="stat">
    <strong>{value}</strong>
    <p>{label}</p>
  </div>
);

/* ---------- Semester page (one component, all 5 semesters) ---------- */

function SemesterPage() {
  const { id } = useParams();
  const sem = semesters.find((s) => s.id === Number(id));

  if (!sem) {
    return (
      <section className="card">
        <h2>Semester not found</h2>
        <p>Choose a semester from 1 to {semesters.length} in the menu.</p>
      </section>
    );
  }

  const s = summarize(sem);
  const prev = semesters.find((x) => x.id === sem.id - 1);
  const next = semesters.find((x) => x.id === sem.id + 1);

  return (
    <>
      <CollegeHeader title={`${s.name.toUpperCase()} - MARK STATEMENT`} />

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th className="left">Subject</th>
              <th>Credits</th>
              <th>Internal (25)</th>
              <th>External (75)</th>
              <th>Total (100)</th>
              <th>Grade</th>
              <th>Grade Point</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {s.rows.map((r) => (
              <tr key={r.code}>
                <td>{r.code}</td>
                <td className="left">{r.name}</td>
                <td>{r.credits}</td>
                <td>{r.internal}</td>
                <td>{r.external}</td>
                <td><b>{r.total}</b></td>
                <td><span className={`grade g-${r.grade.replace("+", "p")}`}>{r.grade}</span></td>
                <td>{r.point}</td>
                <td className={r.pass ? "pass" : "fail"}>{r.pass ? "PASS" : "RA"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="semester-summary">
        <p><b>SGPA:</b> {s.sgpa.toFixed(2)}</p>
        <p><b>Total Credits:</b> {s.totalCredits}</p>
        <p><b>Credits Earned:</b> {s.earned}</p>
        <p><b>Attendance:</b> {s.attendance}%</p>
        <p><b>Result:</b> <span className={s.result === "PASS" ? "pass" : "fail"}>{s.result}</span></p>
      </div>

      <Signatures />

      <div className="pager no-print">
        {prev ? <Link to={`/semester/${prev.id}`}>&larr; {prev.name}</Link> : <span />}
        <PrintButton />
        {next
          ? <Link to={`/semester/${next.id}`}>{next.name} &rarr;</Link>
          : <Link to="/overall">Overall Report &rarr;</Link>}
      </div>
    </>
  );
}

/* ---------- Overall report ---------- */

function OverallReport() {
  const o = overallSummary();
  return (
    <>
      <CollegeHeader title="OVERALL ACADEMIC REPORT" />

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th className="left">Semester</th>
              <th>SGPA</th>
              <th>Total Credits</th>
              <th>Credits Earned</th>
              <th>Attendance</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {o.sems.map((s) => (
              <tr key={s.id}>
                <td className="left"><Link to={`/semester/${s.id}`}>{s.name}</Link></td>
                <td><b>{s.sgpa.toFixed(2)}</b></td>
                <td>{s.totalCredits}</td>
                <td>{s.earned}</td>
                <td>{s.attendance}%</td>
                <td className={s.result === "PASS" ? "pass" : "fail"}>{s.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="card">
        <h2>SGPA Trend</h2>
        <div className="bars">
          {o.sems.map((s) => (
            <div key={s.id} className="bar-col">
              <span className="bar-val">{s.sgpa.toFixed(2)}</span>
              {/* bar height scaled from 6.0 to 10.0 so differences are visible */}
              <div className="bar" style={{ height: `${((s.sgpa - 6) / 4) * 100}%` }} />
              <span>Sem {s.id}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="stat-grid six">
        <Stat value={o.cgpa.toFixed(2)} label="Overall CGPA" />
        <Stat value={o.totalCredits} label="Total Credits" />
        <Stat value={o.earned} label="Credits Earned" />
        <Stat value={o.arrears} label="Arrears" />
        <Stat value={`${o.attendance}%`} label="Attendance" />
        <Stat value={o.result} label="Overall Result" />
      </div>

      <section className="card">
        <h2>Performance Summary</h2>
        <p>
          {student.name} has completed {o.sems.length} semesters with a CGPA of{" "}
          <b>{o.cgpa.toFixed(2)}</b>, earning {o.earned} of {o.totalCredits} credits
          with {o.arrears === 0 ? "no arrears" : `${o.arrears} arrear(s)`}. The highest
          SGPA was <b>{o.best.sgpa.toFixed(2)}</b> in {o.best.name}.
        </p>
      </section>

      <Signatures />
      <div className="pager no-print"><span /><PrintButton /><span /></div>
    </>
  );
}

/* ---------- Main component imported in App.jsx ---------- */

function ReportCard() {
  return (
    <>
      <Navbar />
      <main className="report-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/semester/:id" element={<SemesterPage />} />
          <Route path="/overall" element={<OverallReport />} />
          <Route path="*" element={
            <section className="card">
              <h2>Page not found</h2>
              <Link to="/">Go to Home</Link>
            </section>
          } />
        </Routes>
      </main>
    </>
  );
}

export default ReportCard;