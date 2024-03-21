import { RouterProvider } from "react-router-dom";
import router from "./routes";
import store from './Redux/store';
import { Provider } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';


export default function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  )
}
