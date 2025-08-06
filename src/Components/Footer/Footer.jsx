"use client"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </p>
        
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-pink-500 transition">Privacy</a>
          <a href="#" className="hover:text-pink-500 transition">Terms</a>
          <a href="#" className="hover:text-pink-500 transition">Contact</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
