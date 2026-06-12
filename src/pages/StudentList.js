import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const { addFavourite } = useContext(StudentContext);

  const students = [
    { id: 1, name: "Mukesh", roll: "CS101" },
    { id: 2, name: "Prakash", roll: "CS102" },
    { id: 3, name: "Ruthish", roll: "CS103" },
    { id: 4, name: "Pariazhagan", roll: "CS104" },
    { id: 5, name: "VsanthKumar", roll: "CS105" },
    
];
  

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div className="card" key={student.id}>
          <h3>{student.name}</h3>
          <p>Roll No: {student.roll}</p>

          <button
            onClick={() => addFavourite(student)}
          >
            Add to Favourite
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;