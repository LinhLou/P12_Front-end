import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./App/routes";
import store from './Redux/store';
import { Provider } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);