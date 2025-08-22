"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        w-full h-[300px] rounded-none md:-w-[50%] md:h-[450px] md:rounded-full overflow-hidden relative flex justify-center items-center
      "
    >
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <Image
            key={"slide" + index}
            src={image}
            alt={"slide" + index}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out absolute top-0 left-0 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
