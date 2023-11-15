import '../App.css';
import Macros from '../components/Macros';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import WeightMain from '../components/WeightMain';

function Nutrition() {
  return (
    <div className="whole">
      <Sidebar />
      <Header />
      <div className="content">
        <div className="node macros">
          <Macros />
        </div>
        <div className="node track-weight">
          <WeightMain />
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
