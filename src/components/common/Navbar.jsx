import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  Badge,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function NavList() {
  const cartData = useSelector((state) => state.cart.carts);
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-3 md:gap-12">
      <Typography variant="small" color="blue-gray" className="font-bold">
        <NavLink to={"/"}>
          <h1 className="font-mono font-bold cursor-pointer ">Home</h1>
        </NavLink>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-bold">
        <NavLink to={"/product"}>
          <h1 className="font-mono font-bold cursor-pointer">Product</h1>
        </NavLink>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-bold">
        <NavLink to={"/cart"}>
          {cartData.length > 0 ? (
            <Badge content={cartData.length} className="md:-mt-2">
              <h1 className="font-mono font-bold cursor-pointer mt-2 md:mt-0 ">
                Bag
              </h1>
            </Badge>
          ) : (
            <h1 className="font-mono font-bold cursor-pointer ">Bag</h1>
          )}
        </NavLink>
      </Typography>
    </List>
  );
}

export default function NavbarBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl py-0 px-6 md:mt-4 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <img className="h-20  cursor-pointer" src={logo} alt="LogoPic" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
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
        <NavList />
        <div className="flex w-full flex-nowrap h-[70px] items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
