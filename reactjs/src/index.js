import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-datepicker/dist/react-datepicker.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';
import { RouterProvider } from "react-router-dom";
import router from "./App/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);