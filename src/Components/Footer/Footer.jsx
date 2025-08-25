"use client"

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-6 mt-10">
      <div className=" max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="">
          © {new Date().getFullYear()} Click & Pick.  All rights reserved.
        </p>
        
        <div className="flex gap-4 text-sm">
          <Link href="" className="hover:font-bold transition">Contact</Link>
          <Link href="/login" className="hover:font-bold transition">Admin Panel</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
