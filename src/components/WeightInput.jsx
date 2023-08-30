import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const WeightInput = ({ onSubmit }) => {
  const [date, setDate] = useState(new Date());
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, weight });
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit} className="weight-form">
      <label>Select date: </label>
      <DatePicker
        selected={date}
        className="datepicker"
        onChange={(date) => setDate(date)}
      />
      <label>Enter your weight: </label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="weight-input"
      />
      <button type="submit" className="input">
        Submit
      </button>
    </form>
  );
};

WeightInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WeightInput;
