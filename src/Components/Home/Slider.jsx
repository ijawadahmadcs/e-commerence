"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/joystick.webp",
  "/images/earphones.jpeg",
  "/images/headphones.jpeg",
  "/images/mobile.jpeg",
  "/images/tablet.jpeg",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
 useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div className="flex-1 max-w-[50%] overflow-hidden relative h-[450px] flex justify-center items-center">
      <div className="flex relative h-full w-full">
        {images.map((image, index) => {
          return (
            <Image
              fill
              alt={"slide" + index}
              key={"slide" + index}
              className={`min-w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out absolute top-0 left-0 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              src={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
