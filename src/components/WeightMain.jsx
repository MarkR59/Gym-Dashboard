import { useState } from 'react';
import WeightInput from './WeightInput';
import WeightGraph from './WeightGraph';

const WeightMain = () => {
  const [weights, setWeights] = useState([]);

  const addWeight = ({ date, weight }) => {
    setWeights((prevWeights) => {
      const newWeights = [...prevWeights];
      const index = newWeights.findIndex((item) => date < item.date);
      if (index !== -1) {
        newWeights.splice(index, 0, { date, weight });
      } else {
        newWeights.push({ date, weight });
      }
      return newWeights;
    });
  };

  return (
    <div>
      <label className="node-label">Weight Tracker</label>
      <WeightInput onSubmit={addWeight} />
      <WeightGraph data={weights} />{' '}
    </div>
  );
};

export default WeightMain;
