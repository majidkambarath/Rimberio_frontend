import React from "react";
import { useSelector } from "react-redux";
export default function payment() {
  const cartData = useSelector((state) => state.cart.carts);
  const sum = cartData.reduce(
    (acc, cur) => acc + cur.item.price * cur.quantity,
    0
  );
  const roundedSum = Math.floor(sum);
  return (
    
    <div className="w-[600px] ml-[100px] ">
      <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-2xl font-semibold">Order items</h2>
        <ul className="flex flex-col pt-4 space-y-2">
          { cartData.map((item) => {
            return (
              <li className="flex items-start justify-between">
                <h3>
                  {item.item.title.substring(0, 12)}
                  <span className="text-sm dark:text-violet-400">
                    {" "}
                    x {item.quantity}
                  </span>
                </h3>
                <div className="text-right">
                  <span className="block">
                    $ {item.quantity * item.item.price}
                  </span>
                </div>
              </li>
            );
          }) 
        }
        </ul>
        <div className="pt-4 space-y-2">
          <div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ {roundedSum}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>-$4.30</span>
          </div>
        </div>
        <div className="pt-4 space-y-2">
          <div className="space-y-6">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-semibold">$ {roundedSum - 4.3}</span>
            </div>
            <button
              type="button"
              className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
