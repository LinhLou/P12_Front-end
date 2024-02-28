import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { columns, employees } from '../data/employees-mokup';
import DataTable from 'react-data-table-component';


export default function EmployeeList() {

  const [filterText, setFilterText] = useState('');
  const [employeesList, setEmployeesList] = useState(employees);

  const handleChange = (e)=>{
    setFilterText(e.target.value);
  }
  useEffect(()=>{
    const filteredEmployeess = employees.filter(
      item => {
        const array1 = Object.values(item);
        const array2 = array1.slice(1);
        const filterd = array2.filter(item=>item.toLowerCase().includes(filterText.toLowerCase()));
        if(filterd.length!=0){
          return true
        }
        return false
      }
    )
    console.log(filteredEmployeess);
    setEmployeesList(filteredEmployeess);
  },[filterText])

  return (
    <div className="App">
      <h1 className='mt-4'>Current Employees</h1>
      <div className='container-table'>
          <input className="form-control me-sm-2" type="search" placeholder="Search" onChange={(e)=>handleChange(e)}/>
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
