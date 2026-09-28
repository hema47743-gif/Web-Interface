import React, { useState } from "react";
import "./Attendence.css";

function Attendence() {

  const students = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Bala" },
    { id: 3, name: "Charan" },
    { id: 4, name: "Dinesh" },
    { id: 5, name: "Hema" },
    { id: 6, name: "Hari" },
    { id: 7, name: "Karthik" },
    { id: 8, name: "Lokesh" },
    { id: 9, name: "Divya" },
    { id: 10, name: "Srimathi" },
    { id: 11, name: "Praveen" },
    { id: 12, name: "Lathika" },
    { id: 13, name: "Ravi" },
    { id: 14, name: "Malini" },
    { id: 15, name: "Bhavani" },
    { id: 16, name: "Vijay" },
    { id: 17, name: "Vishal" },
    { id: 18, name: "Shija" },
    { id: 19, name: "sharani" },
    { id: 20, name: "Shivani" }
  ];

  // Initially everyone is not marked
  const [attendance, setAttendance] = useState({});

  // Mark attendance
  const markAttendance = (id, status) => {
    setAttendance({
      ...attendance,
      [id]: status
    });
  };

  // Count Present and Absent
  const presentCount = Object.values(attendance).filter(
    status => status === "Present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    status => status === "Absent"
  ).length;

  const notMarkedCount = students.length - presentCount - absentCount;

  return (
    <div className="attendance-container">

      <h1>Attendance Tracker System</h1>

      <div className="student-list">

        {students.map(student => (
          <div className="student-card" key={student.id}>

            <div className="student-info">
              <span>{student.id}</span>
              <h3>{student.name}</h3>
            </div>

            <div className="buttons">

              <button
                className={attendance[student.id] === "Present" ? "present active" : "present"}
                onClick={() => markAttendance(student.id, "Present")}
              >
                Present
              </button>

              <button
                className={attendance[student.id] === "Absent" ? "absent active" : "absent"}
                onClick={() => markAttendance(student.id, "Absent")}
              >
                Absent
              </button>

            </div>

            <div className="status">
              {attendance[student.id] || "Not Marked"}
            </div>

          </div>
        ))}

      </div>

      <div className="summary">

        <div className="count-box">
          <h2>{presentCount}</h2>
          <p>Present</p>
        </div>

        <div className="count-box">
          <h2>{absentCount}</h2>
          <p>Absent</p>
        </div>

        <div className="count-box">
          <h2>{notMarkedCount}</h2>
          <p>Not Marked</p>
        </div>

      </div>

    </div>
  );
}

export default Attendence;