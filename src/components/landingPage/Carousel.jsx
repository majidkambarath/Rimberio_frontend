import React from "react";
import { Carousel } from "@material-tailwind/react";
import dates1 from "../../assets/dates1.jpg";
import dates3 from "../../assets/dates3.jpg";
import dates4 from "../../assets/dates4.jpg";
import Header from "../common/Header";
import  NavbarBar  from "../common/Navbar";
export default function CarouselNavigate() {
  const carouselData = [
    {
      title: "Indulge in the Rich Flavor of Exquisite Medjool Dates",
      imageUrl: dates1,
    },
    {
      title:
        "Savor the Nutrient-packed Goodness of Our Organic Dried Fruits Mix",
      imageUrl: dates3,
    },
    {
      title:
        "Elevate Your Snacking Experience with Our Assorted Dry Fruits and Nuts",
      imageUrl: dates4,
    },
  ];
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-20">
        <NavbarBar/>
      </div>
      <Carousel className="w-full h-[550px] ">
        {carouselData.map((item, index) => (
          <div key={index} className="w-full h-[550px] relative">
            <h1 className="absolute top-1/3 left-1/2   transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-Dance">
              {item.title}
            </h1>
            <img
              src={item.imageUrl}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
