import React from "react";
import ReactDOM from "react-dom/client";
import AccountProvider from "./context/AccountsContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>
);
