import React from "react";
import ReactDOM from "react-dom/client";
import AccountProvider from "./context/AccountsContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AccountProvider>
      <RouterProvider router={router} />
    </AccountProvider>
  </React.StrictMode>
);
