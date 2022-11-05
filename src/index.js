import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import CartPage from "./pages/CartPage";
import ParticularProductPage from "./pages/ParticularProductPage";
import ButtonAppBar from "./components/Navbar";
import ProductDisplay from "./components/ProductDisplay";
// import { persistor } from "./store";
// import { PersistGate } from "redux-persist/integration/react";
// import LoadingComponent from "./components/LoadingComponent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ButtonAppBar />,
    children: [
      {
        path: "/",
        element: <ProductDisplay />,
      },
      {
        path: "/ProductCart",
        element: <CartPage />,
      },
      {
        path: "/particularproduct/:id",
        element: <ParticularProductPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
  </Provider>
);
