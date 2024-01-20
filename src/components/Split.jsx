import React, { useState, useEffect } from "react";

const Split = () => {
  const [workouts, setWorkouts] = useState({});

  useEffect(() => {
    const handleSplitChange = (event) => {
      const selectedSplit = event.target.value;
      let routine;
      if (selectedSplit === "PPL") {
        routine = ["Push", "Pull", "Legs", "Rest"];
      } else if (selectedSplit === "Upper/Lower") {
        routine = ["Upper", "Lower", "Rest", "Upper", "Lower", "Rest"];
      } else if (selectedSplit === "Full Body") {
        routine = ["Full Body", "Rest", "Full Body", "Rest", "Full Body", "Rest"];
       } else {
        routine = new Array(7).fill(selectedSplit);
      }
      const days = ["1", "2", "3", "4", "5", "6", "7"];

      const newWorkouts = days.reduce((acc, day, index) => {
        acc[day] = routine[index % routine.length] || "";
        return acc;
      }, {});

      setWorkouts(newWorkouts);
    };

    const workoutSplitElement = document.getElementById("workoutSplit");
    workoutSplitElement.addEventListener("change", handleSplitChange);

    return () => {
      workoutSplitElement.removeEventListener("change", handleSplitChange);
    };
  }, []);

  return (
    <div className="split">
      <label className="node-label">Workout Split</label>
      <select id="workoutSplit">
        <option value="">Select a Workout Split</option>
        <option value="PPL">Push/Pull/Legs</option>
        <option value="Upper/Lower">Upper/Lower</option>
        <option value="Full Body">Full Body</option>
        <option value="CTBISAL">ChestTri/BackBi/ShoulderArms/Legs</option>
      </select>
      <div className="split-content">
        {["1", "2", "3", "4", "5", "6", "7"].map((day, index) => (
          <div key={index} className="day-container">
            <span className="split-day">Day {index + 1} </span>
            <div className="vertical-line"></div>
            <span className="split-workout">{workouts[day]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Split;
