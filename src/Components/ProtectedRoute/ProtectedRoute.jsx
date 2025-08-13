"use client"
import { useAtomValue } from "jotai";
import { authTokenAtom } from "@/jotai/atom"; 
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const token = useAtomValue(authTokenAtom);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (!token) return null;
  return <>{children}</>;
}
