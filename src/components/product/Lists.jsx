import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FaBagShopping } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";
import axios from "axios";
// import { CiHeart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaFilter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/slice/cartSlice";
import { setCategories } from "../../store/slice/categorySlice";
import { setPriceDate } from "../../store/slice/priceSlice";
import toast from "react-hot-toast";
import SiderBar from "./SiderBar";
import FilterPage from "./filter";
export default function Lists() {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categories.Categories);
  const priceState = useSelector((state) => state.price.prices);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [item, setItem] = useState([]);
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState(1);
  const [data, setData] = useState(3);

  // const [addedToCartItems, setAddedToCartItems] = useState({});
  // console.log(addedToCartItems)
  // const handleMouseEnter = (index) => {
  //   setHoveredIndex(index);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredIndex(null);
  // };
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

  useEffect(() => {
    const checkWindowWidth = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 960) {
        setData(3);
      } else if (windowWidth >= 600) {
        setData(4);
      } else {
        setData(4);
      }
    };

    // Check window width when the component mounts
    checkWindowWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWindowWidth);

    // Clean up by removing event listener when component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  const next = () => {
    if (active === 7) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const handleAddToCart = (item) => {
    // const isItemInCart = addedToCartItems[item.id];

    // if (isItemInCart) {
    //   dispatch(addItem({ id: item.id, item: item, quantity: 1 }));
    //   console.log("Item is already in the cart");
    // } else {
      console.log(item)
    dispatch(addItem({ id: item.id, item: item, quantity: 1 }));
    console.log("ss");
    toast.success(`Added ${item.title.substring(0, 12)} to the cart!`, {
      position: "top-right",
      autoClose: 3000, // Close the toast after 3000 milliseconds (adjust as needed)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // }
  };

  return (
    <>
      <div className="w-full max-h-screen relative ">
        <h1 className="flex justify-center mt-10 md:mt-16 md:-ml-[300px] font-sans md:text-3xl">
          {categoryState ? categoryState.toUpperCase() : "COLLECTIONS"}
        </h1>
        <div className="block md:hidden">
          <div className="flex ml-6  " onClick={() => setHide(true)}>
            <FaFilter className="text-xl" />
            <h1 className="font-serif">Filters</h1>
          </div>
          {hide && (
            <>
              <div className="bg-gray-100 h-2/3 ml-2 w-2/3 absolute  flex justify-between ">
                <div className="absolute">
                  <FilterPage />
                </div>
                <h1
                  className="text-2xl relative ml-52  mt-3"
                  onClick={() => setHide(false)}
                >
                  <RxCross2 />
                </h1>
              </div>
            </>
          )}
        </div>

        <div className=" w-full px-2  md:ml-0  mt-14 grid grid-flow-row-dense md:grid-cols-4 grid-cols-2 md:gap-14 gap-5">
          {item.slice(active * data - data, active * data).map((item) => {
            //  const isItemInCart = addedToCartItems[item.id];
            return (
              <div key={item.id} className="md:w-[270px]  md:h-[300px]">
                <div className="flex">
                  <img
                    className="md:h-[180px] h-[140px] w-[150px]  md:w-[160px]"
                    src={item.image}
                    alt="prodectImage"
                  />
                  <button className="md:ml-10  -mt-36 md:-mt-36">
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
                      } md:text-2xl mr-1`}
                    >
                      {"\u2605"}
                    </button>
                  ))}
                </div>
                <h1 className="md:mt-4 md:ml-0   text-gray-500">
                  {item.title.substring(0, 7)}
                </h1>
                <h1 className="font-sans">
                  {item.description.substring(0, 20)}
                </h1>
                <div className="mt-5 flex  ">
                  {/* {isItemInCart ? (
                    <button
                      key={item.id}
                      onClick={() => handleAddToCart(item)}
                      className="bg-red-400 flex  text-white h-12  w-36 text-3xl py-1  "
                    >
                      <h1 className="mt-2 w-36 font-mono ml-2 text-sm ">
                        ADD MORE
                      </h1>
                    </button> */}
                  {/* ) : ( */}
                  <button
                    key={item.id}
                    // onMouseEnter={() => handleMouseEnter(item.id)}
                    // onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleAddToCart(item)}
                    className="bg-red-400 flex  text-white h-12 w-13 text-3xl px-3 py-2"
                  >
                    <FaBagShopping className="" />
                    {/* <h1
                        className={`${
                          hoveredIndex === item.id ? "block" : "hidden"
                        } mt-2 w-36 font-mono ml-4 text-sm`}
                      >
                        ADD TO CART
                      </h1> */}
                  </button>
                  {/* )} */}

                  <h1 className="ml-6 mt-2 text-2xl font-sans ">
                    ${item.price}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-2 md:-ml-[200px] md:mt-36">
          <Button
            variant="text"
            className="flex text-xs items-center  md:gap-2"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="md:h-4 md:w-4 " />{" "}
            Previous
          </Button>
          <div className="flex items-center w-[150px]  md:w-[290px]  md:gap-2">
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
            className="flex text-xs items-center gap-[1px] md:gap-2"
            onClick={next}
            disabled={active === 7}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
