import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <img src="src\assets\logo_icon.png" className="logo"></img>
      <div className="side-main">
        <div>
          <Link to="/" className="side-link">
            <img src="src\assets\home_icon.png" className="link"></img>
            <p>Home</p>
          </Link>
        </div>
        <div>
          <Link to="/Nutrition" className="side-link">
            <img src="src\assets\food_icon.png" className="link"></img>
            <p>Nutrition</p>
          </Link>
        </div>
        <div>
          <Link to="/Lifting" className="side-link">
            <img src="src\assets\dumbell_icon.png" className="link"></img>
            <p>Lifting</p>
          </Link>
        </div>
      </div>
      <div className="logout">
        <Link to="/Login" className="side-link">
          <img src="src\assets\logout_icon.png" className="link"></img>
          <p>Logout</p>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
