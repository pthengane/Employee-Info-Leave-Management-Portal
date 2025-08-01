import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Adminavbar from './Adminavbar'

export default function AdminDashboard() {

  
  let navigate = useNavigate();
  let [employees, setEmployees] = useState([]);
  let [searchresult, setSearchresult] = useState([]);
  let [dept, setDept] = useState();
  let [fname, setFname] = useState();
  let [lname, setLname] = useState();
  let [desig, setDesig] = useState();
let app = "http://16.171.165.29:8080/EmployeeManagementSystemJan-0.0.1-SNAPSHOT" 

  useEffect(() => {
    getdata();

  });

  let getdata = () => {
    axios.get(`${app}/findallemp`)
      .then((response) => {
        if (response.data) {
          setEmployees(response.data);
        }
      })
      .catch((error) => alert(error));
  }

  let deleteempbyid = (empid) => {
    axios.delete(`${app}/deleteemp/${empid}`)
      .then((response) => {
        if (response.data === "Employee Record deleted sucesfully!!!") {
          alert("Employee Record deleted sucesfully!!!");
          getdata();
        }
      })
      .catch((error) => alert(error));
  }

  let serchbyfname = () => {
    axios.get(`${app}/getempbyfirstname/${fname}`)
      .then((response) => {
        if (response.data) setSearchresult(response.data);
      })
      .catch((error) => alert(error));
  }

  let serchbylname = () => {
    axios.get(`${app}/getempbylastname/${lname}`)
      .then((response) => {
        if (response.data) setSearchresult(response.data);
      })
      .catch((error) => alert(error));
  }

  let serchbydesig = () => {
    axios.get(`${app}/getempbydesig/${desig}`)
      .then((response) => {
        if (response.data) setSearchresult(response.data);
      })
      .catch((error) => alert(error));
  }

  let serchbydept = () => {
    axios.get(`${app}/getempbydept/${dept}`)
      .then((response) => {
        if (response.data) setSearchresult(response.data);
      })
      .catch((error) => alert(error));
  }

  let updateEmployee = (empid) => {
    navigate(`/update/${empid}`);
  }

 
  let logout = () => {
    localStorage.clear();
    navigate('/'); 
  }

  return (
    <div>
      <Adminavbar />
      
      
      <div className="text-end m-3">
        <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
      </div>
      <h1 className="text-center my-4">Welcome, Admin!!</h1>

        
      <h1 className="text-center my-4">Admin Dashboard</h1>

      
      <div className="container mb-4">
        <div className="row g-2">
          <div className="col-md-3">
            <input type="text" className="form-control mb-2" placeholder="Enter First Name" onChange={(e) => setFname(e.target.value)} />
            <button className="btn btn-outline-primary w-100" onClick={serchbyfname}>Search</button>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control mb-2" placeholder="Enter Last Name" onChange={(e) => setLname(e.target.value)} />
            <button className="btn btn-outline-primary w-100" onClick={serchbylname}>Search</button>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control mb-2" placeholder="Enter Designation" onChange={(e) => setDesig(e.target.value)} />
            <button className="btn btn-outline-primary w-100" onClick={serchbydesig}>Search</button>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control mb-2" placeholder="Enter Department" onChange={(e) => setDept(e.target.value)} />
            <button className="btn btn-outline-primary w-100" onClick={serchbydept}>Search</button>
          </div>
        </div>
      </div>

      
      <div className="container">
        <div className="row">
          {
            (searchresult.length > 0 ? searchresult : employees).map((emp) => (
              <div className="col-md-4 mb-4" key={emp.empid}>
                <div className="card shadow-sm h-100">
                  <img
                    src={emp.profile}
                    alt="Profile"
                    className="card-img-top"
                    style={{
                      height: "400px",
                      objectFit: "contain",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem"
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{emp.firstname} {emp.lastname}</h5>
                    <p className="card-text mb-1"><strong>Email:</strong> {emp.email}</p>
                    <p className="card-text mb-1"><strong>Contact:</strong> {emp.contactno}</p>
                    <p className="card-text"><strong>Designation:</strong> {emp.designation}</p>
                  </div>
                  <div className="card-footer bg-white d-flex justify-content-between">
                    <button className="btn btn-sm btn-primary" onClick={() => updateEmployee(emp.empid)}>Update</button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteempbyid(emp.empid)}>Delete</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
