import React from "react";
import img from "../../assets/bg1.jpg";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../store/slice/cartSlice";
import { NavLink } from "react-router-dom";

export default function Carts() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.carts);
  const handleIncrement = (item) => {
    dispatch(incrementQuantity({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity({ id: item.id }));
  };
  const handleRomove = (item) => {
    dispatch(removeItem({ id: item.id }));
  };
  return (
    <>
      <div className="flex w-full flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y dark:divide-gray-700">
          {cartData.length > 0 ? (
            cartData.map((item) => {
              console.log(item);
              return (
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                      src={item.item.image}
                      alt="cartsimg"
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leadi sm:pr-8">
                            {item.item.title.substring(0, 12)}
                          </h3>
                          <p className="text-sm dark:text-gray-400">
                            {" "}
                            {item.item.category}
                          </p>
                        </div>
                        <div className=" mt-7 flex">
                          <button onClick={() => handleIncrement(item.item)}>
                            <FaPlus />
                          </button>
                          <h3 className="text-lg ml-6 font-semibold sm:pr-8">
                            {item.quantity}
                          </h3>
                          <button onClick={() => handleDecrement(item.item)}>
                            <FaMinus />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            $ {item.quantity * item.item.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-sm divide-x">
                        <button
                          onClick={() => handleRomove(item.item)}
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current"
                          >
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect
                              width="32"
                              height="200"
                              x="168"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="240"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="312"
                              y="216"
                            ></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                          </svg>
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <div className="flex items-center justify-center h-48">
              <div className="text-center">
                <h2 className="text-3xl font-semibold mb-4">
                  Your Cart is Empty
                </h2>
                <p className="text-gray-500">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <NavLink to={"/product"}>
                <button className="mt-4 px-6 py-2 bg-red-200 text-white rounded hover:bg-red-300 focus:outline-none focus:ring focus:border-red-400">
                  Continue Shopping
                </button>
                </NavLink>
               
              </div>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
