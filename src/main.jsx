import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./Routes/Route";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataProvider from "./DataProvider/DataProvider";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="top-center" />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <RouterProvider router={Route} />
        </DataProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
