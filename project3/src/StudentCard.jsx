function StudentCard(props) {
  return (
    <div className="student-card">

      <img
  src={props.photo}
  alt="Student"
  width="150"
  height="150"
    />

      <h2>{props.name}</h2>

      <p><b>Register No:</b> {props.regNo}</p>

      <p><b>Department:</b> {props.dept}</p>

      <p><b>Year:</b> {props.year}</p>

      <p><b>Semester:</b> {props.sem}</p>

      <p><b>CGPA:</b> {props.cgpa}</p>

      <p><b>Attendance:</b> {props.attendance}%</p>

    </div>
  );
}

export default StudentCard;