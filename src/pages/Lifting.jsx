import '../App.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import SearchExercises from '../components/SearchExercises';
import { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';

function Lifting() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <div className="whole">
        <Sidebar />
        <Header />
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
