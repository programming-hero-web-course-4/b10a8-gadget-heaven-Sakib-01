import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import Cards from "./components/Cards/Cards.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import ShowProduct from "./components/ShowProduct/ShowProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Products></Products>,
          },
        ],
      },
      {
        path: "/showProduct",
        element: <ShowProduct></ShowProduct>,
        children: [
          {
            path: "/showProduct/product/:id",
            element: <ProductDetails></ProductDetails>,
            loader: () => fetch("../public/products.json"),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
