import '../App.css';
import Calendar from '../components/Calendar';
import GoalMain from '../components/GoalMain';
import Sidebar from '../components/Sidebar';
import Tips from '../components/Tips';
import WeightMain from '../components/WeightMain';
import Header from '../components/header';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <div className="whole">
        <Sidebar />
        <Header />
        <div className="content">
          <div className="node track-weight">
            <WeightMain />
          </div>
          <div className="node">
            <Calendar />
          </div>
          <div className="node">
            <Tips />
          </div>
          <div className="node">
            <GoalMain />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default App;
