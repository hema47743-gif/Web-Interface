function SubjectList(props) {

  const attendanceStatus =
    props.attendance >= 80
      ? "Eligible for Semester"
      : "Not Eligible for Semester";

  const placementStatus =
    props.attendance >= 80
      ? "Eligible"
      : "Need to Improve";

  return (
    <div className="subject-list">

      <h2>Current Semester Details</h2>

      <p><b>Current Year:</b> {props.currentYear}</p>

      <p><b>Current Semester:</b> {props.currentSem}</p>

      <p><b>Total Subjects:</b> {props.totalSubjects}</p>

      <p><b>Attendance:</b> {props.attendance}%</p>

      <p>
        <b>Attendance Status:</b> {attendanceStatus}
      </p>

      <p>
        <b>Placement Status:</b> {placementStatus}
      </p>

      <h3>Subjects</h3>

      <ul>
        {props.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

    </div>
  );
}

export default SubjectList;