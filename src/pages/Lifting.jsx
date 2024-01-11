import "../App.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";
import SearchExercises from "../components/SearchExercises";
import { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import { jwtDecode } from "jwt-decode";

function Lifting() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const token = localStorage.getItem("token");
  let username = null;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      username = decodedToken.username;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return (
    <Box>
      <div className="whole">
        <Sidebar />
        <Header name={username} />
        <div>
          <div className="node input-container">
            <SearchExercises
              setExercises={setExercises}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
            <Exercises
              exercises={exercises}
              setExercises={setExercises}
              bodyPart={bodyPart}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Lifting;
