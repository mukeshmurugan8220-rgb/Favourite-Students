import { useState } from "react";
import { StudentProvider } from "./context/StudentContext";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import "./App.css";

function App() {
  const [page, setPage] = useState("students");

  return (
    <StudentProvider>
      <div>
        <nav>
          <button type="button" onClick={() => setPage("students")}>Students</button>
          {" | "}
          <button type="button" onClick={() => setPage("favourites")}>Favourite Students</button>
        </nav>

        {page === "students" ? <StudentList /> : <FavouriteStudents />}
      </div>
    </StudentProvider>
  );
}

export default App;