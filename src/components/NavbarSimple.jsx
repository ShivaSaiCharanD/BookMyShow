import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NavList({ isLoggedIn, handleLogout }) {
  return (
    <ul className="my-2 flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Pages
        </a>
      </Typography>
      {!isLoggedIn ? (
        <>
          <Link to="/login">
            <Button color="amber" variant="gradient" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="outlined" size="sm">
              SignUp
            </Button>
          </Link>
        </>
      ) : (
        <Button color="red" variant="gradient" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      )}


    </ul>
  );
}

export default function NavbarSimple({ isLoggedIn, onLogout }) {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  return (
    <Navbar className="mx-auto max-w-screen-xl px-3 py-2 mt-1">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          BMS
        </Typography>
        <div className="hidden lg:block">
        <NavList isLoggedIn={isLoggedIn} handleLogout={onLogout} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList isLoggedIn={isLoggedIn} handleLogout={onLogout} />
      </Collapse>
    </Navbar>
  );
}