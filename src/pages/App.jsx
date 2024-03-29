import "../App.css";
import Calendar from "../components/Calendar";
import GoalMain from "../components/GoalMain";
import Sidebar from "../components/Sidebar";
import Tips from "../components/Tips";
import Header from "../components/header";
import Split from "../components/Split";
import { Box } from "@mui/material";
import { jwtDecode } from "jwt-decode";

function App() {
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
    <Box>
      <div className="whole">
        <Sidebar />
        <Header name={username} />
        <div className="content">
          <Calendar />

          <Tips />

          <GoalMain />

          <Split />
        </div>
      </div>
    </Box>
  );
}

export default App;
