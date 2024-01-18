import React from "react";
import logo from "../../assets/logo.png";
import { TiShoppingCart } from "react-icons/ti";
export default function Header() {
  return (
    <>
      <div className="w-full h-20 ">
        <img className="h-28  ml-5 sm:ml-3 md:ml-9 cursor-pointer" src={logo} alt="LogoPic" />
        <div className="flex justify-center gap-28  -mt-20  ">
          <h1 className="font-mono font-bold cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
            Home
          </h1>
          <h1 className="font-mono font-bold cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Product
          </h1>
        </div>
        <div className="flex float-right mr-6 -mt-9 ">
          <button className="inline-flex text-black items-center text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <h1 className="text-4xl ">
              <TiShoppingCart />
            </h1>
            <span>
              {" "}
              <h1 className="text-xl font-mono inline-flex items-center justify-center w-4 h-4 ms-2  font-semibold rounded-full">
                0
              </h1>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
