import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "./Loader";





export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [type, setType] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function loginUser(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        setIsLoggedIn(true);  // Update state to reflect logged-in status
      }
     
    }
    catch (error) {
      toast.error("Invalid Credentials" , {position: 'bottom-right' , autoClose: 1500});
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }


  return (
    <div className="flex justify-center mt-36 ">
      <ToastContainer />
      <Card color="transparent" shadow={true} className="border border-white-100 p-4 shadow-yellow-700 shadow-md" >
        <Typography variant="h4" color="white" className="text-center">
          Login
        </Typography>
        <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={loginUser}>
          <div className="mb-1 flex flex-col gap-5">
            <Input label="Username" color="white" onChange={(e)=>setUsername(e.target.value)} variant="static" autoComplete="username" required/>
              <Input type={type?"text":"password"} label="password" placeholder="********" color="white" variant="static" onChange={(e)=>setPassword(e.target.value)} autoComplete="current-password" required/>
              <Checkbox label="Show Password"  onChange={()=>setType(!type)} color="amber"/>  
          </div>

          <Button type="submit" className="mt-2" variant="outlined" color="amber" fullWidth onSubmit={loginUser}>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an Account?{" "}
            <Link to="/signup" className="font-medium text-gray-50">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
      {loading && <Loader message="Logging in..."/>}
    </div>

  )
}
