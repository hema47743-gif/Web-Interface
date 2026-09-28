// All marks live here. SGPA, CGPA, credits and results are calculated from them.
// Subject row: [code, name, credits, internal (25), external (75)]

export const student = {
  name: "Hemamalini G",
  regNo: "24CSE001",
  gender: "Female",
  dob: "15-06-2006",
  department: "CSE - Cyber Security",
  programme: "B.E.",
  batch: "2024 - 2028",
  currentSem: "V",
  college: "PRINCE DR. K. VASUDEVAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
  status: "Active",
};

export const semesters = [
  {
    id: 1, name: "Semester I", attendance: 96,
    subjects: [
      ["MA101", "Engineering Mathematics I", 4, 24, 65],
      ["PH101", "Engineering Physics", 3, 22, 64],
      ["CY101", "Engineering Chemistry", 3, 21, 60],
      ["CS101", "Programming in C", 4, 23, 67],
      ["HS101", "Technical English", 3, 21, 66],
      ["GE101", "Engineering Graphics", 3, 24, 60],
    ],
  },
  {
    id: 2, name: "Semester II", attendance: 95,
    subjects: [
      ["MA102", "Engineering Mathematics II", 4, 23, 64],
      ["CS102", "Data Structures", 4, 24, 66],
      ["CS103", "Object Oriented Programming", 3, 22, 65],
      ["EC102", "Digital Electronics", 3, 21, 63],
      ["HS102", "Professional English", 3, 24, 62],
      ["CS104", "Data Structures Lab", 2, 24, 68],
    ],
  },
  {
    id: 3, name: "Semester III", attendance: 97,
    subjects: [
      ["CS201", "Java Programming", 4, 24, 68],
      ["CS202", "Database Management Systems", 3, 23, 65],
      ["CS203", "Computer Networks", 3, 22, 64],
      ["CS204", "Operating Systems", 3, 21, 65],
      ["CS205", "Python Programming", 3, 24, 63],
      ["CS206", "DBMS Lab", 2, 24, 70],
    ],
  },
  {
    id: 4, name: "Semester IV", attendance: 96,
    subjects: [
      ["CS301", "Web Technology", 4, 24, 67],
      ["CS302", "Software Engineering", 3, 23, 64],
      ["CS303", "Cyber Security", 3, 24, 66],
      ["CS304", "Artificial Intelligence", 3, 22, 65],
      ["CS305", "Cloud Computing", 3, 21, 64],
      ["CS306", "Web Technology Lab", 2, 25, 70],
    ],
  },
  {
    id: 5, name: "Semester V", attendance: 96,
    subjects: [
      ["CS401", "Advanced Java", 4, 24, 68],
      ["CS402", "Data Science", 3, 23, 66],
      ["CS403", "Network Security", 3, 24, 65],
      ["CS404", "Machine Learning", 3, 22, 67],
      ["CS405", "Web Application Development", 3, 24, 64],
      ["CS406", "Mini Project", 2, 24, 72],
    ],
  },
];

// Total (out of 100) -> grade and grade point
export function gradeOf(total) {
  if (total >= 90) return { grade: "O", point: 10 };
  if (total >= 80) return { grade: "A+", point: 9 };
  if (total >= 70) return { grade: "A", point: 8 };
  if (total >= 60) return { grade: "B+", point: 7 };
  if (total >= 50) return { grade: "B", point: 6 };
  return { grade: "RA", point: 0 }; // re-appear (arrear)
}

export function summarize(sem) {
  const rows = sem.subjects.map(([code, name, credits, internal, external]) => {
    const total = internal + external;
    const { grade, point } = gradeOf(total);
    return { code, name, credits, internal, external, total, grade, point, pass: grade !== "RA" };
  });
  const totalCredits = rows.reduce((s, r) => s + r.credits, 0);
  const earned = rows.filter((r) => r.pass).reduce((s, r) => s + r.credits, 0);
  const sgpa = rows.reduce((s, r) => s + r.point * r.credits, 0) / totalCredits;
  const arrears = rows.filter((r) => !r.pass).length;
  return {
    ...sem,
    rows,
    totalCredits,
    earned,
    sgpa,
    arrears,
    result: arrears === 0 ? "PASS" : "FAIL",
  };
}

export function overallSummary() {
  const sems = semesters.map(summarize);
  const totalCredits = sems.reduce((s, x) => s + x.totalCredits, 0);
  const earned = sems.reduce((s, x) => s + x.earned, 0);
  const cgpa =
    sems.reduce((s, x) => s + x.sgpa * x.totalCredits, 0) / totalCredits;
  const arrears = sems.reduce((s, x) => s + x.arrears, 0);
  const attendance = Math.round(
    sems.reduce((s, x) => s + x.attendance, 0) / sems.length
  );
  const best = sems.reduce((a, b) => (b.sgpa > a.sgpa ? b : a));
  return {
    sems, totalCredits, earned, cgpa, arrears, attendance, best,
    result: arrears === 0 ? "PASS" : "FAIL",
  };
}