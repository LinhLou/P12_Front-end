import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";


const reHydrateStore = () => {
  if (localStorage.getItem("persistantState") !== null) {
    return JSON.parse(localStorage.getItem("persistantState")); // re-hydrate the store
  }
};


const persistedStateMiddleware = ({ getState }) => {
  return (next) => (action) => {
    next(action);
    localStorage.setItem("persistantState", JSON.stringify(getState()));
  };
};

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistedStateMiddleware),
})


export default store