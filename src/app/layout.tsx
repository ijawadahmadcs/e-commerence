import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/CartContext/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import ClientOnly from "@/Components/Clientonly/Clientonly";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Click & Pick",
  description: "Online shooping platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ClerkProvider>
          <ClientOnly>
            <ThemeProvider>
              <CartProvider>
                {children}
              
              </CartProvider>
            </ThemeProvider>
          </ClientOnly>
        </ClerkProvider>
      </body>
    </html>
  );
}
