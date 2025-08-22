import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { CartProvider, useCart } from "@/cartContext/cartContext.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import ClientOnly from "@/Components/Clientonly/Clientonly";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Picksyy",
  description: "Online shopping platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
          <ClientOnly>
            <ThemeProvider>
              <CartProvider>{children}</CartProvider>
            </ThemeProvider>
          </ClientOnly>
        </ClerkProvider>
      </body>
    </html>
  );
}
