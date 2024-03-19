import React from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from 'react-data-table-ll-08';
import store from '../Redux/store';

const formatedData = (data)=>{
  if(data.length==0){
    const formatedData = { columns:[],rows:[]}
    return formatedData
  }
  let formatedData = {
    columns:[
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
        name:'Departement',
        value:'departement',
        type:'string',
        sortable:true
      },
      {
        name:'Date of Birth',
        value:'birthDate',
        type:'date',
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
        name:'State',
        value:'state',
        type:'string',
        sortable:true
      },
      {
        name:'Zip Code',
        value:'zipCode',
        type:'number',
        sortable:true
      },
    ],
    rows:[]
  }
  formatedData=data.reduce((acc,ele)=>{
    const newRows = {
        firstName:ele.firstName,
        lastName:ele.lastName,
        startDate:ele.startDate,
        birdthDate: ele.birdthDate,
        departement:ele.departement,
        state:ele.state,
        street: ele.street,
        city:ele.city,
        zipCode:ele.zipCode
      }
    acc.rows.push(newRows);
    return acc
  },formatedData);
  return formatedData
}

const styleCustom = {
  table_contenu__table: 'table_title_ct',
  table_filter: 'form-control',
  table_contenu__table:'table table-hover',
  table_contenu__tbody__tr:'table-active',
  table_contenu__thead__tr:'table-active',
}

export default function EmployeeList() {
  const state = store.getState();
  const employeesList = state.employee.employees;
  const data = formatedData(employeesList);
  return (
    <div className="App">
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
