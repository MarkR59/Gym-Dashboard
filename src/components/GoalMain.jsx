import GoalsInput from './GoalsInput';
import GoalCards from './GoalCards';
import { useState } from 'react';

function GoalMain() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (goal) => {
    if (goals.length > 3) {
      return;
    } else {
      setGoals([...goals, goal]);
    }
  };

  return (
    <>
      <div className="goal-main">
        <div>
          <GoalsInput onAddGoal={handleAddGoal} />
        </div>
        <div className="goals-list-container">
          {goals.map((goal, index) => (
            <GoalCards key={index} goal={goal} />
          ))}
        </div>
      </div>
    </>
  );
}

export default GoalMain;
