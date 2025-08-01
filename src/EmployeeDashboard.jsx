import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EmpNavbar from './EmpNavbar'
import { useNavigate } from 'react-router-dom'   

export default function EmployeeDashboard() {

  
  let [employees, setEmployees] = useState([])
  let [searchresult, setSearchresult] = useState([])
  let [name, setName]=useState("")
  let [dept, setDept] = useState()
  let [fname, setFname] = useState()
  let [lname, setLname] = useState()
  let [desig, setDesig] = useState()
  let navigate = useNavigate();
let app = "http://16.171.165.29:8080/EmployeeManagementSystemJan-0.0.1-SNAPSHOT" 

  useEffect(() => {
    getAllEmployees()
    let user = JSON.parse(localStorage.getItem("user"))
    setName(user.firstname + " "+ user.lastname);
  }, [])

  let getAllEmployees = () => {
    axios.get(`${app}/findallemp`)
      .then((response) => {
        if (response.data) {
          setEmployees(response.data)
        }
      })
      .catch((error) => alert(error))
  }

  let serchbyfname = () => {
    axios.get(`${app}/getempbyfirstname/${fname}`)
      .then((response) => {
        if (response.data) setSearchresult(response.data)
      })
      .catch((error) => alert(error))
  }

  let serchbylname = () => {
    axios.get(`${app}/getempbylastname/${lname}`)
      .then((response) => {
        if (response.data) setSearchresult(response.data)
      })
      .catch((error) => alert(error))
  }

  let serchbydesig = () => {
    axios.get(`${app}/getempbydesig/${desig}`)
      .then((response) => {
        if (response.data) setSearchresult(response.data)
      })
      .catch((error) => alert(error))
  }

  let serchbydept = () => {
    axios.get(`${app}/getempbydept/${dept}`)
      .then((response) => {
        if (response.data) setSearchresult(response.data)
      })
      .catch((error) => alert(error))
  }

  
  let logout = () => {
    localStorage.clear();    
    navigate('/');           
  }

  return (
    <div>
      <EmpNavbar />

      
      <div className="text-end m-3">
        <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
      </div>

      <h1 className="text-center my-4">Employee Dashboard</h1>
      <h1 className="text-center my-4">Welcome, {name}</h1>

     
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
                      borderTopRightRadius: "0.5rem",
                      backgroundColor: "#f8f9fa"
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{emp.firstname} {emp.lastname}</h5>
                    <p className="card-text mb-1"><strong>Email:</strong> {emp.email}</p>
                    <p className="card-text mb-1"><strong>Contact:</strong> {emp.contactno}</p>
                    <p className="card-text"><strong>Designation:</strong> {emp.designation}</p>
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
