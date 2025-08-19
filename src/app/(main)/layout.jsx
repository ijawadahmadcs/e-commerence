import Header from "@/Components/Header/Header";

import Footer from "@/Components/Footer/Footer";
export default function MainLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
}
