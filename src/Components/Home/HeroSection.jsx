import React from "react";
import Slider from "./Slider";
import Container from "../Container/Container";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-16 rounded-2xl gap-8 bg-white mt-4">
        <div className="flex-1 text-gray-800 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Bas click karo, ghar lao!{" "}
            <span className="text-pink-500">
              Picksyy
            </span>
          </h1>
          <p className="text-base md:text-lg font-medium">
            Discover the latest headphones, earphones, mobiles, tablets etc.
          </p>
          <p className="text-base md:text-lg font-medium mb-6">
            Exclusive deals just for you!
          </p>
          <Link href="/product">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition duration-300 text-sm md:text-base font-semibold shadow-md">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="flex-1 w-full md:w-auto">
          <Slider />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
