import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import { CartProvider } from "./context/CartContext.jsx";

import { Toaster } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <CartProvider>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
        }}
      />
    </CartProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
