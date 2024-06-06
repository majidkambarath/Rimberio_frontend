import React from "react";
import datesbg1 from "../../assets/datesbg1.jpg";
import datesbg2 from "../../assets/datesbg2.jpg";
import datesbg3 from "../../assets/datesbg3.jpg";
import datesbg4 from "../../assets/datesbg4.jpg";
import datesbg5 from "../../assets/datesbg5.jpg";
import datesbg6 from "../../assets/datesbg6.jpg";
export default function DatesLisit() {
  return (
    <div>
      <div className="grid grid-flow-row-dense grid-cols-4 ml-2 ">
        <div className="bg-slate-200 cursor-pointer w-full">
          <h1 className="text-3xl font-Dance py-10 absolute text-white z-20 px-3 hover:underline ">
            Barhi Dates
          </h1>
          <img
            className="relative object-cover md:h-[250px] md:mt-2  md:w-[330px] "
            src={datesbg1}
            alt="DatesCategories"
          />
        </div>
        <div className="bg-slate-200  cursor-pointer w-fll ">
          <h1 className="text-3xl absolute z-20  font-Dance py-10 px-3 hover:underline text-white ">
            New In
          </h1>
          <img
            className="relative md:h-[508px] md:mt-2 md:w-[330px] "
            src={datesbg2}
            alt="DatesCategories"
          />
        </div>
        <div className="bg-slate-200 cursor-pointer w-full">
          <h1 className="text-3xl absolute z-20 font-Dance py-10 px-3 hover:underline text-white ">
            Dried Fruits
          </h1>
          <img
            className="relative object-cover  md:h-[250px] bg-p3 md:mt-2 md:w-[330px] "
            src={datesbg3}
            alt="DatesCategories"
          />
        </div>
        <div className="bg-slate-200 cursor-pointer w-full">
          <h1 className="text-3xl absolute z-20 font-Dance py-10 px-3 hover:underline text-white ">
            Seeds
          </h1>
          <img
            className="relative object-cover md:h-[250px] md:mt-2 md:w-[330px] "
            src={datesbg4}
            alt="DatesCategories"
          />
        </div>
        <div className="bg-slate-200 cursor-pointer md:col-span-2 w-full">
          <h1 className="text-3xl md:-mt-[250px]  absolute z-20 font-Dance py-10 px-3 hover:underline text-white">
            Nuts
          </h1>
          <img
            className="relative object-cover md:h-[250px]  md:-mt-[250px] md:w-[330px] "
            src={datesbg5}
            alt="DatesCategories"
          />
        </div>
        <div className="bg-slate-200 cursor-pointer md:h-[250px] md:-mt-[250px]  md:w-[665px]">
          <h1 className=" absolute z-20 text-3xl font-Dance py-10 px-3 hover:underline text-white ">
          Stuffed Dates
          </h1>
          <img
            className=" relative object-cover md:top-[250px]  md:h-[250px] md:-mt-[250px]  md:w-[665px] "
            src={datesbg6}
            alt="DatesCategories"
          />
        </div>
      </div>
    </div>
  );
}
