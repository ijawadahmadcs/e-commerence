import Header from "@/Components/Header/Header";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";
import Footer from "@/Components/Footer/Footer";
export default function MainLayout({ children }) {
  return (
    <>
      <ProtectedRoute>
        <div>
          <Header />
          <main className="min-h-screen">{children}</main>
            <Footer/>
        </div>
      </ProtectedRoute>
    </>
  );
}
