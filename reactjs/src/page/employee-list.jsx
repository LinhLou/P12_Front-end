import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { columns, employees_mockup } from '../data/employees-mokup';
import DataTable from 'react-data-table-component';
import { useDispatch } from 'react-redux';
import store from '../Redux/store';


export default function EmployeeList() {
  const dispatch = useDispatch();
  const state = store.getState();
  const employeesList = state.employee.employees;

  const searchRef = useRef();
  // const handleChange = ()=>{
  //   dispatch(filterdEmployees(searchRef.current.value));
  // }

  return (
    <div className="App">
      <h1 className='mt-4'>Current Employees</h1>
      <div className='container-table'>
          <input className="form-control me-sm-2" ref={searchRef} type="search" placeholder="Search"/>
        <DataTable
        className='mt-4'
        columns={columns}
        data={employeesList}
        pagination
        />
      </div>
      <Link className='mt-4' to="/">Home</Link>
    </div>
  )
}
