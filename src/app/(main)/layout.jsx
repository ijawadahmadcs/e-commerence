// app/(main)/layout.tsx
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>

    </>
  );
}
