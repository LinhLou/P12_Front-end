import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import countryList from "./data/countries";
import Modal from 'react-modal';

import "react-datepicker/dist/react-datepicker.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';

Modal.setAppElement("#root");

function App() {

  const [startDate, setStartDate] = useState(new Date());
  const [birthday, setBirthday] = useState(new Date());
  const [departement, setDepartement] = useState('Sales');
  const [country, setCountry] = useState('Afghanistan');
  const departements = [{ id: 1, name: 'Sales' }, { id: 2, name: 'Marketing' }, { id: 3, name: 'Engineering' }, { id: 4, name: 'Humain Resoureces' }, { id: 5, name: 'Legal' }];

  //  modal 
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  //  
  const handleSaveBtn = (e) => {
    e.preventDefault();
    openModal();
  };


  return (
    <div className="App">
      <div className="App_title mt-4">
        <h1>HRnet</h1>
      </div>
      <div className="App_container mt-4">
        <a href="employee-list.html">View Current Employees</a>
        <h2 className='mt-4'>Create Employee</h2>
        <form action="#" id="create-employee">
          <div className="form-group">
            <label forhtml="first-name" className="form-label mt-4">First Name</label>
            <input type="text" className="form-control" id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="form-group">
            <label forhtml="last-name" className="form-label mt-4">Last Name</label>
            <input type="text" className="form-control" id="last-name" placeholder="Enter your last name" />
          </div>
          <div className="form-group">
            <label forhtml="date-of-birth" className="form-label mt-4">Date of Birth</label>
            <div className="form-control">
              <DatePicker id="date-of-birth" className="datepicker" selected={birthday} onChange={(date) => setBirthday(date)} />
            </div>
          </div>
          <div className="form-group">
            <label forhtml="start-date" className="form-label mt-4">Start Date</label>
            <div className="form-control">
              <DatePicker id="start-date" className="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>
          <div className="form-group">
            <fieldset className="address mt-4" >
              <legend className="address-legend">Address</legend>
              <div className="form-group">
                <label forhtml="street" className="form-label mt-2">Street</label>
                <input type="text" className="form-control" id="street" />
              </div>
              <div className="form-group">
                <label forhtml="city" className="form-label mt-4">City</label>
                <input type="text" className="form-control" id="city" />
              </div>
              <div className="form-group">
                <label forhtml="state" className="form-label mt-4">State</label>
                <div className="form-control">
                  <Select options={countryList} id="state" labelField="country" valueField="id" onChange={(country) => setCountry(country)} />
                </div>
              </div>
              <div className="form-group">
                <label forhtml="zip-code" className="form-label mt-4">Zip code</label>
                <input type="number" className="form-control" id="zip-code" />
              </div>
            </fieldset>
          </div>
          <div className="form-group">
            <label forhtml="department" className="form-label mt-4">Department</label>
            <div className="form-control">
              <Select options={departements} id="department" labelField="name" valueField="id" onChange={(departement) => setDepartement(departement)} />
            </div>
          </div>
          <div className="form-group mt-4 container-btn">
            <button type="submit" className="btn btn-primary" onClick={(e) => handleSaveBtn(e)}>Save</button>
          </div>
        </form>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="form-group mt-4 container-btn">
          <h2 className="">Employée created!</h2>
          <button className="btn btn-primary mt-4" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
