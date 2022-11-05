import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import CartPage from "./pages/CartPage";
// import { persistor } from "./store";
// import { PersistGate } from "redux-persist/integration/react";
// import LoadingComponent from "./components/LoadingComponent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ProductCart",
    element: <CartPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
  </Provider>
);
