"use client";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
    onClick={handleClick}
    className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer hover:colo">
    {theme === "dark" ? (<MdOutlineLightMode size={28}/>) : (<MdOutlineDarkMode size={28}/>)}
    </button>
  );
};

export default Theme;
