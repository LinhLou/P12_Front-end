import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';

function App() {
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
            <input type="text" className="form-control" id="date-of-birth" placeholder="Enter your date of birth" />
          </div>
          <div className="form-group">
            <label forhtml="start-date" className="form-label mt-4">Start Date</label>
            <input type="text" className="form-control" id="start-date" placeholder="Enter the start date" />
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
                <input type="text" className="form-control" id="state" />
              </div>
              <div className="form-group">
                <label forhtml="zip-code" className="form-label mt-4">Zip code</label>
                <input type="number" className="form-control" id="zip-code" />
              </div>
            </fieldset>
          </div>
          <div className="form-group">
            <label forhtml="department" className="form-label mt-4">Department</label>
            <input type="number" className="form-control" id="department" />
          </div>
          <div className="form-group mt-4 container-save-btn">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
      <div id="confirmation" className="modal">Employee Created!</div>
    </div>
  );
}

export default App;