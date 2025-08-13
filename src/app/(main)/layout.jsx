import Header from "@/Components/Header/Header";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";

export default function MainLayout({ children }) {
  return (
    <>
      <ProtectedRoute>
        <div>
          <Header />
          <main className="min-h-screen">{children}</main>
        </div>
      </ProtectedRoute>
    </>
  );
}
