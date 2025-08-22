"use client";
import Link from "next/link";
import { FiHome, FiLogOut } from "react-icons/fi";
import { useAtom } from "jotai";
import { authTokenAtom } from "@/jotai/atom";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";
import Footer from "@/Components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <ProtectedRoute>
        <div>
          <NavBar />
          <main className="min-h-screen">{children}</main>
            <Footer/>
        </div>
      </ProtectedRoute>
    </>
  );
}


const NavBar=()=>{
    const [, setToken] = useAtom(authTokenAtom);
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    setToken(null); // Clear token
    router.push("/login"); // Redirect to login
  };

  return (
    <nav className="w-full bg-gray-100 shadow px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link
          href="/firstpage"
          className="flex items-center gap-2 text-pink-500 font-semibold hover:text-gray-700 transition"
        >
          <FiHome size={20} /> Home
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition"
      >
        <FiLogOut size={20} /> Logout
      </button>
    </nav>
  );
};
