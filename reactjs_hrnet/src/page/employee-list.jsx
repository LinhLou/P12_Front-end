import React from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from 'react-table-component-ll-oc';
import store from '../Redux/store';
const columns = [
  {
    name:'First Name',
    value:'firstName',
    type:'string',
    sortable:true
  },
  {
    name:'Last Name',
    value:'lastName',
    type:'string',
    sortable:true
  },
  {
    name:'Start Date',
    value:'startDate',
    type:'date',
    sortable:true
  },
  {
    name:'Date of Birth',
    value:'birdthDate',
    type:'date',
    sortable:true
  },
  {
    name:'Departement',
    value:'departement',
    type:'string',
    sortable:true
  },
  {
    name:'State',
    value:'state',
    type:'string',
    sortable:true
  },
  {
    name:'Street',
    value:'street',
    type:'string',
    sortable:true
  },
  {
    name:'City',
    value:'city',
    type:'string',
    sortable:true
  },
  {
    name:'Zip Code',
    value:'zipCode',
    type:'number',
    sortable:true
  },
];
const formatedData = (data)=>{

  if(data.length===0){
    const initialData = { columns:columns,rows:[]}
    return initialData
  }

  let formatedData = {
    columns:columns,
    rows:[]
  }
  formatedData=data.reduce((acc,ele)=>{
    acc.rows.unshift(ele);
    return acc
  },formatedData);
  return formatedData
}

const styleCustom = {
  table_section:'table_section__ct',
  table_filter: 'table_filter__ct',
  table_contenu__table:'table table-hover',
  table_contenu__tbody__tr:'table-dark table_contenu__tbody__tr__ct',
  table_contenu__thead__tr:'table-dark',
}

export default function EmployeeList() {
  const state = store.getState();
  const employeesList = state.employee.employees;
  const data = formatedData(employeesList);
  return (
    <div className="App" data-testid='employeesListPage'>
      <h1 className='mt-4'>Current Employees</h1>
      <DataTable 
        data={data}
        searchTbl
        pagination
        styleCustom={styleCustom}
        />
      <Link className='mt-4' to="/">Home</Link>
    </div>
  )
}
