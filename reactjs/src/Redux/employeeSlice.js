import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees:[],
    // {
    //   firstName:'',
    //   lastName:'',
    //   startDate:'',
    //   birdthDate: '',
    //   departement:'',
    //   state: '',
    //   street: '',
    //   city: '',
    //   zipCode: ''
    // }
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    createEmployee: (state, action) => {
      const newEmployee = {...action.payload};
      state.employees.push(newEmployee);
    }
  }
});

export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
