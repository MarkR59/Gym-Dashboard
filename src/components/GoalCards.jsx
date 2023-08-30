import PropTypes from 'prop-types';

function GoalCard({ goal }) {
  return (
    <div className="goal-card">
      <p>{goal}</p>
    </div>
  );
}

GoalCard.propTypes = {
  goal: PropTypes.string.isRequired,
};

export default GoalCard;
