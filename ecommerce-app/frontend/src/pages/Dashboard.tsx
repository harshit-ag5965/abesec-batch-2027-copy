import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    navigate("/signin");
    return;
  }
  return (
    <div>
      <h1>Welcome to Dashboard!</h1>
    </div>
  );
};

export default Dashboard;
