import React from "react";
import Featured from "@/Components/Home/Featured";
import HeroSection from "@/Components/Home/HeroSection";
import RecentlyAdded from "@/Components/Home/RecentlyAdded";

function FirstPage() {
  return (
    <>
      <div>
        <HeroSection />
        <Featured />
        <RecentlyAdded />
      </div>
    </>
  );
}

export default FirstPage;
