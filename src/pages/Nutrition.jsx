import "../App.css";
import Macros from "../components/Macros";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";
import WeightMain from "../components/WeightMain";
import { jwtDecode } from "jwt-decode";

function Nutrition() {
  const token = localStorage.getItem("token");
  let username = null;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      username = decodedToken.username;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return (
    <div className="whole">
      <Sidebar />
      <Header name={username} />
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
