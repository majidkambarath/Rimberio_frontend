import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FaBagShopping } from "react-icons/fa6";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/slice/cartSlice";
import toast from "react-hot-toast";
export default function Lists() {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categories.Categories);
  const priceState = useSelector((state) => state.price.prices);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [item, setItem] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [active, setActive] = useState(1);
  const [addedToCartItems, setAddedToCartItems] = useState({});
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const [minPrice, maxPrice] = priceState
    .split("-")
    .map((value) => parseFloat(value.trim()));
  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          const products = res.data;
          const filteredData = products
            .filter(
              (product) => !categoryState || product.category === categoryState
            )
            .filter(
              (product) =>
                (!minPrice || product.price >= minPrice) &&
                (!maxPrice || product.price <= maxPrice)
            );

          setItem(filteredData);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, [categoryState, priceState]);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 7) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  
  const handleAddToCart = (item) => {
    const isItemInCart = addedToCartItems[item.id];

    if (isItemInCart) {
      dispatch(addItem({ id: item.id, item: item, quantity: 1 }));
      console.log("Item is already in the cart");
    } else {
      dispatch(addItem({ id: item.id, item: item, quantity: 1 }));
      setAddedToCartItems((prevItems) => ({
        ...prevItems,
        [item.id]: true,
      }));
      toast.success(`Added ${item.title.substring(0, 12)} to the cart!`, {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3000 milliseconds (adjust as needed)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="w-full max-h-screen ">
        <h1 className="flex justify-center mt-16 -ml-[300px] font-Dance text-3xl">
          {categoryState ? categoryState.toUpperCase() : "COLLECTIONS"}
        </h1>
        <div className=" w-full  mt-14 grid grid-flow-row-dense grid-cols-3 gap-14">
          {item.slice(active * 3 - 3, active * 3).map((item) => {
             const isItemInCart = addedToCartItems[item.id];
            return (
              <div key={item.id} className="w-[270px]  h-[300px]">
                <div className="flex">
                  <img
                    className="h-[180px]  w-[160px]"
                    src={item.image}
                    alt="prodectImage"
                  />
                  <button className="ml-10 -mt-36">
                    <h1 className="text-xl text-red-400 ">
                      <FaHeart />
                    </h1>
                  </button>
                </div>

                <div>
                  {stars.map((star) => (
                    <button
                      type="button"
                      key={star}
                      className={`${
                        star <= item.rating.rate
                          ? "text-yellow-300"
                          : "text-gray-400"
                      } text-2xl mr-1`}
                    >
                      {"\u2605"}
                    </button>
                  ))}
                </div>
                <h1 className="mt-4 font-Montserrat text-gray-500">
                  {item.title.substring(0, 12)}
                </h1>
                <h1 className="font-sans">
                  {item.description.substring(0, 30)}
                </h1>
                <div className="mt-5 flex  ">
                  {isItemInCart ? (
                    <button
                      key={item.id}
                      onClick={() => handleAddToCart(item)}
                      className="bg-red-400 flex  text-white h-12  w-36 text-3xl py-1  "
                    >
                      <h1 className="mt-2 w-36 font-mono ml-2 text-sm ">
                        ADD MORE
                      </h1>
                    </button>
                  ) : (
                    <button
                      key={item.id}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={() => handleMouseLeave()}
                      onClick={() => handleAddToCart(item)}
                      className={`bg-red-400 flex  text-white h-12 ${
                        hoveredIndex === item.id ? "w-40" : "w-13"
                      }     text-3xl px-3 py-2`}
                    >
                      <FaBagShopping className="" />
                      <h1
                        className={`${
                          hoveredIndex === item.id ? "block" : "hidden"
                        } mt-2 w-36 font-mono ml-4 text-sm`}
                      >
                        ADD TO CART
                      </h1>
                    </button>
                  )}

                  <h1 className="ml-6 mt-2 text-2xl font-Dance ">
                    ${item.price}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center -ml-[200px] mt-36">
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton {...getItemProps(1)}>1</IconButton>
            <IconButton {...getItemProps(2)}>2</IconButton>
            <IconButton {...getItemProps(3)}>3</IconButton>
            <IconButton {...getItemProps(4)}>4</IconButton>
            <IconButton {...getItemProps(5)}>5</IconButton>
            <IconButton {...getItemProps(6)}>6</IconButton>
            <IconButton {...getItemProps(7)}>7</IconButton>
          </div>
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={next}
            disabled={active === 7}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
