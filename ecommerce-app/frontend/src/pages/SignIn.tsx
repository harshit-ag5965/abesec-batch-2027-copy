import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async () => {
    try {
      console.log("SignIn Button Clicked");
      const success = await login({
        email: "archana.singh@gmail.com",
        password: "Archana@12",
      });

      if (success) {
        console.log("SignIn Successfull.");
        navigate("/dashboard");
      } else {
        console.log("SignIn Failed!");
        navigate("/signIn");
      }
    } catch (error) {
      console.log("Connection Error.");
      navigate("/signIn");
    }
  };
  return <Button onClick={handleLogin}>SignIn</Button>;
};

export default SignIn;
