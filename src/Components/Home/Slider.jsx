"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg"
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div className="flex-1 max-w-[50%] overflow-hidden relative h-[450px] flex justify-center items-center border-1 border-pink-400 rounded-full">
      <div className="flex relative h-full w-full ">
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