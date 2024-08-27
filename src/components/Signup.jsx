import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
  Select,
  Option
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: ""
  });
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      setPasswordValid(isStrongPassword(value));
      setPasswordMatch(value === formData.confirmPassword);
    }

    if (name === "confirmPassword") {
      setPasswordMatch(value === formData.password);
    }
  };

  const isStrongPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordValid || !passwordMatch) {
      toast.error("Please check the password and try again");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/user/register", formData);
   
      if (response.status === 200) {
        toast.success("Signup successful!" , {position: 'bottom-right' , autoClose: 1500});
        navigate("/login");
      }
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("User already exists." , {position: 'bottom-right' , autoClose: 1500});
      } 
      else{
      toast.error("Signup failed. Please try again later." , {position: 'bottom-right' , autoClose: 1500});
      }
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-20 mb-10">
        <ToastContainer />
        <Card color="transparent" shadow={true} className="border p-4 shadow-yellow-700 shadow-md">
          <Typography variant="h4" color="white" className="text-center mb-4">
            Sign Up
          </Typography>
          <form className="w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 mb-4">
              <Input
                label="Username"
                color="white"
                name="username"
                variant="static"
                onChange={handleChange} 
                required
              />
              <Input
                label="Name"
                color="white"
                name="name"
                variant="static"
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                label="Email"
                color="white"
                name="email"
                variant="static"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                label="Phone"
                color="white"
                name="phone"
                variant="static"
                maxLength={10}
                minLength={10}
                onChange={handleChange}
                required
              />
              <Select
                label="Role"
                color="amber"
                name="role"
                variant="static"
                value={formData.role}
                className="text-white"
                onChange={(value) => setFormData({ ...formData, role: value })}
                required
              >
                <Option value="user">User</Option>
                <Option value="admin">Admin</Option>
                <Option value="superadmin">SuperAdmin</Option>
              </Select>
              <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                color="white"
                name="password"
                variant="static"
                onChange={handleChange}
                required
              />
              {!passwordValid && (
                <Alert icon={<Icon />} className="p-0 m-0 text-sm">
                  Password must contain at least 8 characters, including uppercase, lowercase, and a number.
                </Alert>
              )}
              <Input
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                color="white"
                name="confirmPassword"
                onChange={handleChange}
                variant="static"
                required
              />
              {!passwordMatch && (
                <Alert icon={<Icon />} className="p-0 m-0 text-sm">
                  Passwords do not match.
                </Alert>
              )}
              <Checkbox
                label="Show Password"
                onChange={() => setShowPassword(!showPassword)}
                color="amber"
              />
            </div>
            <Button type="submit" variant="outlined" color="amber" fullWidth>
              Sign Up
            </Button>
          </form>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-50">
              Login
            </Link>
          </Typography>
        </Card>
      </div>
    </>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}
