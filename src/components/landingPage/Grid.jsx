import React from "react";

export default function Grid() {
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-4 ml-2 ">
        <div className="bg-slate-200 cursor-pointer md:h-[250px] bg-p1 bg-cover bg-center items-center md:mt-2  md:w-[330px]">
          <h1 className="text-3xl font-Dance py-10 text-white px-3 hover:underline ">
            New In
          </h1>
        </div>
        <div className="bg-slate-200  cursor-pointer md:h-[508px] bg-p2 bg-cover bg-center items-center  md:mt-2 md:w-[330px]">
          <h1 className="text-3xl font-Dance py-10 px-3 hover:underline text-white ">
            Jewelery
          </h1>
        </div>
        <div className="bg-slate-200 cursor-pointer md:h-[250px] bg-p3 bg-cover bg-center items-center md:mt-2 md:w-[330px]">
          <h1 className="text-3xl font-Dance py-10 px-3 hover:underline text-white ">
            Women's clothing
          </h1>
        </div>
        <div className="bg-slate-200 cursor-pointer md:h-[250px] bg-p4 bg-cover bg-center items-center  md:mt-2 md:w-[330px]">
          <h1 className="text-3xl font-Dance py-10 px-3 hover:underline text-white ">
            Mens Cotton Jacket
          </h1>
        </div>
        <div className="bg-slate-200 cursor-pointer md:col-span-2 bg-p5 bg-cover bg-center items-center md:h-[250px]  md:-mt-[250px] md:w-[330px]">
          <h1 className="text-3xl font-Dance py-10 px-3 hover:underline text-white ">
            Men's clothing
          </h1>
        </div>
        <div className="bg-slate-200 cursor-pointer md:h-[250px] bg-p6 bg-cover bg-center items-center md:-mt-[250px]  md:w-[665px]">
          <h1 className="text-3xl font-Dance py-10 px-3 hover:underline text-white ">
            Electronics
          </h1>
        </div>
      </div>

    </>
  );
}
