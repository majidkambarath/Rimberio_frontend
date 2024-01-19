import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";
export default function SiderBar() {
  const [hideSections, setHideSections] = useState({
    collections: false,
    price: false,
  });

  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([
    "10-50",
    "50-100",
    "100-150",
    "150-200",
    "200-250",
  ]);
  useEffect(() => {
    const fetch = () => {
      axios.get("https://fakestoreapi.com/products/categories").then((res) => {
        setCategory(res.data);
      });
    };
    fetch();
  }, []);
  const toggleSection = (section) => {
    setHideSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };
  return (
    <>
      <div className="mt-10 w-2/6 h-screen">
        <div className="flex justify-center mt-20 mr-28">
          <div className="flex">
            <h1 className="text-xl font-sans">Collections </h1>
            <h1
              onClick={() => toggleSection("collections")}
              className="text-xl font-roboto ml-2 cursor-pointer font-bold"
            >
              <FaSortDown />{" "}
            </h1>
          </div>
        </div>
        {hideSections.collections && (
          <div className=" w-[200px] ml-12 mt-2 h-[150px]">
            {category.map((categories, index) => {
              return (
                <h1 key={index} className="py-2 px-2 text-gray-500 cursor-pointer font-sans ">
                  {categories.toUpperCase()}
                </h1>
              );
            })}
          </div>
        )}
        <div className="flex justify-center mt-5 mr-40">
          <div className="flex">
            <h1 className="text-xl font-sans">Price </h1>
            <h1
              onClick={() => toggleSection("price")}
              className="text-xl font-roboto ml-2 cursor-pointer font-bold"
            >
              <FaSortDown />{" "}
            </h1>
          </div>
        </div>
        {hideSections.price && (
          <div className=" w-[200px] ml-12 mt-2 h-[200px]">
            {price.map((price, index) => {
              return (
                <h1 key={index} className="py-2 px-2 text-gray-500 cursor-pointer font-sans ">
                  {price.toUpperCase()}
                </h1>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
