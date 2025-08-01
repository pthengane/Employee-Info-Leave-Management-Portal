import React, { useState } from 'react'
import axios from 'axios';

export default function LeaveForm() {
  const [form, setForm] = useState({
    employeeId: '',
    employeeName: '',
    reason: '',
    fromDate: '',
    toDate: '',
    
  });
let app = "http://16.171.165.29:8080/EmployeeManagementSystemJan-0.0.1-SNAPSHOT" 

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Leave Application Data:', form);
    axios.post(`${app}/applyleave`, form)
        .then((response) => {
          alert('Leave Application Submitted!');
          
        })
        .catch((error) => {
          alert("Error while registering: " + error.message);
        });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Leave Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Employee ID</label>
          <input
            type="text"
            className="form-control"
            name="employeeId"
            value={form.employeeId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            name="employeeName"
            value={form.employeeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <input
            type="text"
            className="form-control"
            name="reason"
            value={form.reason}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">From Date</label>
          <input
            type="date"
            className="form-control"
            name="fromDate"
            value={form.fromDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">To Date</label>
          <input
            type="date"
            className="form-control"
            name="toDate"
            value={form.toDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
