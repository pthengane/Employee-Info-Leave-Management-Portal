import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function AddEmployeeForm() {

  let navigate = useNavigate();

  let [firstname, setFirstname] = useState('');
  let [lastname, setLastname] = useState('');
  let [department, setDepartment] = useState('');
  let [salary, setSalary] = useState(0);
  let [email, setEmail] = useState('');
  let [contactno, setContactno] = useState(0);
  let [joiningdate, setJoiningdate] = useState('');
  let [dob, setDob] = useState('');
  let [designation, setDesignation] = useState('');
  let [exp, setExp] = useState(0);
  let [address, setAddress] = useState('');
  let [gender, setGender] = useState('');
  let [status, setStatus] = useState('');
  let [reportingmanager, setReportingmanager] = useState('');
  let [profile, setProfile] = useState('');
  let app = "http://16.171.165.29:8080/EmployeeManagementSystemJan-0.0.1-SNAPSHOT" 


  let handleimg = (event) => {
    var file = event.target.files[0];
    var filepath = `./img/${file.name}`;
    console.log(filepath);
    setProfile(filepath);
  };

  const validation = () => {
    if (
      firstname === '' || lastname === '' || department === '' ||
      salary <= 0 || email === '' || contactno === '' || joiningdate === '' || dob === '' ||
      designation === '' || exp <= 0 || address === '' || gender === '' ||
      status === '' || profile === '' || reportingmanager === ''
    ) {
      alert("Please fill all the fields");
      return false;
    }
    if (!/^[A-Za-z\s]{2,30}$/.test(firstname)) {
      alert("Please enter a valid first name");
      return false;
    }
    if (!/^[A-Za-z\s]{2,30}$/.test(lastname)) {
      alert("Please enter a valid last name");
      return false;
    }
    if (!/^[A-Za-z\s]{2,30}$/.test(department)) {
      alert("Please enter a valid department name");
      return false;
    }
    if (!/^\d{10}$/.test(contactno)) {
      alert("Please enter a valid 10-digit contact number");
      return false;
    }
    if (salary < 0) {
      alert("Please enter a valid salary");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email");
      return false;
    }
    return true;
  };

  let handlesubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;

    const emp = {
      firstname,
      lastname,
      department,
      salary,
      email,
      contactno,
      joiningdate,
      dob,
      designation,
      exp,
      address,
      gender,
      status,
      reportingmanager,
      profile
    };

    axios.post(`${app}/addemp`, emp)
      .then((response) => {
        if (response.data) {
          alert("Employee Record Added Successfully!!!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  let back =()=>
  {
    navigate("/admindashboard")
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-dark text-white text-center fs-4 fw-bold">
          Add Employee
        </div>
        <div className="card-body">
          <form onSubmit={handlesubmit}>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First Name"
                  onChange={(e) => setFirstname(e.target.value)} />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last Name"
                  onChange={(e) => setLastname(e.target.value)} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Department"
                  onChange={(e) => setDepartment(e.target.value)} />
              </div>
              <div className="col">
                <input type="number" className="form-control" placeholder="Salary"
                  onChange={(e) => setSalary(e.target.value)} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input type="email" className="form-control" placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="col">
                <input type="number" className="form-control" placeholder="Contact No"
                  onChange={(e) => setContactno(e.target.value)} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Joining Date:</label>
                <input type="date" className="form-control"
                  onChange={(e) => setJoiningdate(e.target.value)} />
              </div>
              <div className="col">
                <label className="form-label">Date of Birth:</label>
                <input type="date" className="form-control"
                  onChange={(e) => setDob(e.target.value)} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Designation"
                  onChange={(e) => setDesignation(e.target.value)} />
              </div>
              <div className="col">
                <input type="number" className="form-control" placeholder="Experience (Years)"
                  onChange={(e) => setExp(e.target.value)} />
              </div>
            </div>

            <div className="mb-3">
              <textarea className="form-control" placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}></textarea>
            </div>

            <div className="row mb-3">
              <div className="col">
                <select className="form-select" onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col">
                <select className="form-select" onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Reporting Manager"
                onChange={(e) => setReportingmanager(e.target.value)} />
            </div>

            <div className="mb-4">
              <label className="form-label">Upload Profile:</label>
              <input type="file" className="form-control" accept="image/*" onChange={handleimg} />
            </div>

            <button type="submit" className="btn btn-success w-100 fw-bold">
              Add Employee
            </button>
          </form>
          <button className="btn btn-dark" onClick={back}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeForm;
