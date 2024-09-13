import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.jsx";
import { RouterProvider } from "./router";
import { AuthProvider } from "./context/auth";
import { store } from "./store/config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ReduxProvider store={store}>
        <RouterProvider />
      </ReduxProvider>
    </AuthProvider>
  </React.StrictMode>
);
