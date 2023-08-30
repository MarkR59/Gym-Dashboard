import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <div className='exercise-info'>
            <span className='exercise-button1'>
                {exercise.bodyPart}
            </span>
            <span className='exercise-button2'>
                {exercise.target}
            </span>
        </div>
        <p className='exercise-name'>{exercise.name}</p>
    </Link>
  )
}

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired
  }).isRequired
};

export default ExerciseCard;
