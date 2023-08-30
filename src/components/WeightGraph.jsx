import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeightGraph = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date.toLocaleDateString()),
    datasets: [
      {
        label: 'Weight',
        data: data.map((item) => item.weight),
        borderColor: 'black',
      },
    ],
  };

  return (
    <div className="graph-container">
      <Line data={chartData} />
    </div>
  );
};

WeightGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      weight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default WeightGraph;
