"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
// import { PersistGate } from "redux-persist/integration/react";
export default function Providers({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white`}>
         {/* <PersistGate loading={null} persistor={persistor}> */}
        <Provider store={store}>
          <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          >
            {children}
          </ClerkProvider>
        </Provider>
        {/* </PersistGate> */}
      </body>
    </html>
  );
}
