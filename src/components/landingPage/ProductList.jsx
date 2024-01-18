import React, { useEffect, useState } from "react";
import img from "../../assets/p2.jpg";
import { FaBagShopping } from "react-icons/fa6";
import axios from "axios";
export default function ProductList() {
  // const [hideStates, setHideStates] = useState([]);

  // console.log(hideStates)
  const [item, setItem] = useState([]);
  // const handleMouseEnter = (index) => {
  //   const newHideStates = [...hideStates];
  //   newHideStates[index] = true;
  //   setHideStates(newHideStates);
  // };

  // const handleMouseLeave = (index) => {
  //   const newHideStates = [...hideStates];
  //   newHideStates[index] = false;
  //   setHideStates(newHideStates);
  // };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  useEffect(() => {
    const fetch = () => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        const slicedData = res.data.slice(0, 8);
        setItem(slicedData);
      }).catch((err)=>console.log(err))
    };
    fetch();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-Montserrat font-bold flex justify-center mt-10  ">
        Top Products of This Week
      </h1>
      <div className=" w-[1100px] h-[1000px]   ml-[110px] mt-14 grid grid-flow-row-dense grid-cols-4  gap-16">
        {item.map((item) => {
          return (
            <div key={item.id} className="b  w-[270px] h-[450px] ml-4  ">
              <img
                className="h-[300px]  w-[300px]"
                src={item.image}
                alt="prodectImage"
              />

              <h1 className="mt-4 font-Montserrat text-gray-500">
                {item.title.substring(0, 12)}
              </h1>
              <h1 className="font-sans">{item.description.substring(0, 30)}</h1>
              <div className="mt-5 flex  ">
                <button
                 key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave()}
                  className={`bg-red-400 flex  text-white h-12 ${
                    hoveredIndex === item.id ? "w-36" : "w-13"
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
                <h1 className="ml-6 mt-2 text-2xl font-Dance ">
                  ${item.price}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
