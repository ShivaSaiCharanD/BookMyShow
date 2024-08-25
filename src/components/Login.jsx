import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex justify-center mt-36">
    <Card color="transparent" shadow={false}  >
      <Typography variant="h4" color="white">
        Login
      </Typography>
      <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="white" className="-mb-3">
            Username
          </Typography>
          <Input
            size="sm"
            placeholder="username"
            className=" !border-t-white-200 focus:!border-brown-50"
            color="white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* <Typography variant="h6" color="white" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="sm"
            placeholder="name@mail.com"
            className=" !border-t-white-200 focus:!border-brown-50"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> */}
          <Typography variant="h6" color="white" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="sm"
            placeholder="********"
            className=" !border-t-white-200 focus:!border-brown-50"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
       
        <Button className="mt-8" variant="outlined" color="amber" fullWidth>
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
    </div>

  )
}
