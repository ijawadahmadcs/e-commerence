"use client"
const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-6 mt-10">
      <div className=" max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="">
          © {new Date().getFullYear()} Click & Pick.  All rights reserved.
        </p>
        
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:font-bold transition">Privacy</a>
          <a href="#" className="hover:font-bold transition">Terms</a>
          <a href="#" className="hover:font-bold transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
