import gym_icon from '../assets/gym_icon.png';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Box marginTop={1}>
      <button
        className="body-part-card"
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
      >
        <img src={gym_icon} alt="dumbbell" />
        <div className="body-part-name">{item}</div>
      </button>
    </Box>
  );
};

BodyPart.propTypes = {
  item: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};

export default BodyPart;
