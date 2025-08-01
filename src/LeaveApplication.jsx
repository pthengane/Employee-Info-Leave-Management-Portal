import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LeaveApplication() {

  let navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
let app = "http://16.171.165.29:8080/EmployeeManagementSystemJan-0.0.1-SNAPSHOT" 
  

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'));
    if (userdata) {
      setEmployeeId(userdata.empid);
      setEmployeeName(userdata.firstname + ' ' + userdata.lastname);
    }
  }, [employeeId]);

  const applyForLeave = (e) => {
    e.preventDefault();

   
    const leaveData = {
      employeeId: employeeId,
      employeeName: employeeName,
      reason: reason,
      fromDate: fromDate,
      toDate: toDate,
    };

    console.log('Submitting Leave Data:', leaveData);

    axios.post(`${app}/applyleave`, leaveData)
      .then((response) => {
        if (response.data === 'Leave Applied Sucesfully!!!') {
          alert('Leave Applied Successfully!');
        } else {
          alert(response.data);
        }
      })
      .catch((error) => {
        alert('Error while applying leave: ' + error.message);
      });
  };
  let back =()=>
  {
    navigate("/employeedashboard")
  }


  return (
    <div className="container mt-4">
      <h2 className="mb-3">Leave Application Form</h2>
      <form onSubmit={applyForLeave}>
        <div className="mb-3">
          <label className="form-label">Employee ID</label>
          <input
            type="text"
            className="form-control"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <textarea
            className="form-control"
            rows="4"
            style={{ resize: 'none' }}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">From Date</label>
          <input
            type="date"
            className="form-control"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">To Date</label>
          <input
            type="date"
            className="form-control"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Apply For Leave
        </button>
        <button className="btn btn-dark" onClick={back}>Go Back</button>
      </form>
      
    </div>
  );
}
