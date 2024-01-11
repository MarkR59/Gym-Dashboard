import "../App.css";
import Calendar from "../components/Calendar";
import GoalMain from "../components/GoalMain";
import Sidebar from "../components/Sidebar";
import Tips from "../components/Tips";
import Header from "../components/header";
import { Box } from "@mui/material";
import { jwtDecode } from "jwt-decode";

function App() {
  const token = localStorage.getItem("token");
  console.log(token);
  const username = "bob";

  return (
    <Box>
      <div className="whole">
        <Sidebar />
        <Header name={username} />
        <div className="content">
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
