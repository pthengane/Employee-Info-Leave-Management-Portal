import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UpdateEmployee() {
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

  let info = useParams();
  let empid = info.empid;

  useEffect(() => {
    axios.get(`${app}/findempbyid/${empid}`)
      .then((response) => {
        if (response.data) {
          let emp = response.data;
          setFirstname(emp.firstname);
          setLastname(emp.lastname);
          setDepartment(emp.department);
          setSalary(emp.salary);
          setEmail(emp.email);
          setContactno(emp.contactno);
          setJoiningdate(emp.joiningdate);
          setDob(emp.dob);
          setDesignation(emp.designation);
          setExp(emp.exp);
          setAddress(emp.address);
          setGender(emp.gender);
          setStatus(emp.status);
          setReportingmanager(emp.reportingmanager);
          setProfile(emp.profile);
        }
      })
      .catch((error) => alert(error));
  }, [empid]);

  let actualupdate = (e) => {
    e.preventDefault();
    let newemp = {
      firstname, lastname, department, salary, email, contactno, joiningdate, dob,
      designation, exp, address, gender, status, reportingmanager, profile
    };

    axios.put(`${app}/updateemp/${empid}`, newemp)
      .then((response) => {
        if (response.data) {
          alert("Employee Record Updated Successfully!");
          navigate("/admindashbaord");
        }
      })
      .catch((error) => alert(error));
  };

  let handleimg = (e) => {
    var file = e.target.files[0];
    var filepath = `./img/${file.name}`;
    console.log(filepath);
    setProfile(filepath);
  };

  let back =()=>
  {
    navigate("/admindashboard")
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center fs-4 fw-bold">
          Update Employee
        </div>
        <div className="card-body">
          <form onSubmit={actualupdate}>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control"
                  value={firstname} onChange={(e) => setFirstname(e.target.value)}
                  placeholder="First Name" />
              </div>
              <div className="col">
                <input type="text" className="form-control"
                  value={lastname} onChange={(e) => setLastname(e.target.value)}
                  placeholder="Last Name" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control"
                  value={department} onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Department" />
              </div>
              <div className="col">
                <input type="number" className="form-control"
                  value={salary} onChange={(e) => setSalary(e.target.value)}
                  placeholder="Salary" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input type="email" className="form-control"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" />
              </div>
              <div className="col">
                <input type="number" className="form-control"
                  value={contactno} onChange={(e) => setContactno(e.target.value)}
                  placeholder="Contact Number" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Joining Date</label>
                <input type="date" className="form-control"
                  value={joiningdate} onChange={(e) => setJoiningdate(e.target.value)} />
              </div>
              <div className="col">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control"
                  value={dob} onChange={(e) => setDob(e.target.value)} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control"
                  value={designation} onChange={(e) => setDesignation(e.target.value)}
                  placeholder="Designation" />
              </div>
              <div className="col">
                <input type="number" className="form-control"
                  value={exp} onChange={(e) => setExp(e.target.value)}
                  placeholder="Experience (Years)" />
              </div>
            </div>

            <div className="mb-3">
              <textarea className="form-control"
                value={address} onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"></textarea>
            </div>

            <div className="row mb-3">
              <div className="col">
                <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col">
                <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control"
                value={reportingmanager} onChange={(e) => setReportingmanager(e.target.value)}
                placeholder="Reporting Manager" />
            </div>

            <div className="mb-4">
              <label className="form-label">Upload Profile</label>
              <input type="file" className="form-control"
                accept="image/*" onChange={handleimg} />
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Update Employee
            </button>
          </form>
          <button className="btn btn-dark" onClick={back}>Go Back</button>
        </div>
      </div>
    </div>
  );
}
