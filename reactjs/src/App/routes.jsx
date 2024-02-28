import Home from "../page/home";
import EmployeeList from "../page/employee-list";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path="/employees" element={<EmployeeList/>}/>
    </>
  )
);
export default router