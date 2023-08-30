import { useState } from 'react';
import PropTypes from 'prop-types';

function GoalsInput({ onAddGoal }) {
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal(goal);
    setGoal('');
  };

  return (
    <div className="input-container">
      <label className="node-label">Goals</label>
      <form onSubmit={handleSubmit} className="goals-input">
        <input
          type="text"
          placeholder="Enter your goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit" className="input">
          Add Goal
        </button>
      </form>
    </div>
  );
}

GoalsInput.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};

export default GoalsInput;
