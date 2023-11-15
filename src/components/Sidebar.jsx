import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <img src="src\assets\logo_icon.png" className="logo"></img>
      <Link to="/">
        <img src="src\assets\home_icon.png" className="link"></img>
      </Link>
      <Link to="/Nutrition">
        <img src="src\assets\food_icon.png" className="link"></img>
      </Link>
      <Link to="/Lifting">
        <img src="src\assets\dumbell_icon.png" className="link"></img>
      </Link>
      <div className="logout">
        <Link to="/Login">
          <img src="src\assets\logout_icon.png" className="link"></img>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
