import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductsProvider from "./context/ProductsContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </SidebarProvider>
  </StrictMode>
);
