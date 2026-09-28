import './App.css';

import Header1 from './Header1.jsx';
import StudentCard from './StudentCard.jsx';
import SubjectList from './SubjectList.jsx';
import Footer1 from './Footer1.jsx';
import Myphoto from './assets/my profile1.jpeg';
import Photo1 from './assets/photo props1.jpg';
import Photo2 from './assets/photo props2.jpg';
import Photo3 from './assets/photo props3.jpg';



function App() {
  const student = {
    name: "Hemamalini",
    regNo: "411625149013",
    dept: "CSE - Cyber Security",
    year: "II Year",
    sem: "II Semester",
    cgpa: 9.23,
    attendance: 100,
    photo: Myphoto
  };

  const subjects = [
    "Java Programming",
    "Data Structures",
    "Python",
    "Web Technology",
    "Cyber Security"
  ];
  
  return (
   

    <div>
      <Header1 />

      <StudentCard
        name={student.name}
        regNo={student.regNo}
        dept={student.dept}
        year={student.year}
        sem={student.sem}
        cgpa={student.cgpa}
        attendance={student.attendance}
        photo={student.photo}
      />

      <SubjectList
        subjects={subjects}
        currentSem={student.sem}
        currentYear={student.year}
        totalSubjects={subjects.length}
        attendance={student.attendance}
      />
      <Footer1 />
    </div>

    
    
  );
}

export default App;

