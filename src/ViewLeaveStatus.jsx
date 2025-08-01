import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ViewLeaveStatus() {

  let navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);
  const [employeeId, setEmployeeId] = useState('');

  const [editingLeave, setEditingLeave] = useState(null);
  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
let app = "http://16.171.165.29:8080/EmployeeManagementSystemJan-0.0.1-SNAPSHOT" 

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'));
    if (userdata) {
      setEmployeeId(userdata.empid);
    }
  }, []);

  useEffect(() => {
    if (employeeId) {
      getLeaveDetails();
    }
  }, [employeeId]);

  const getLeaveDetails = () => {
    axios
      .get(`${app}/getleavebyempid/${employeeId}`)
      .then((response) => {
        if (response.data) {
          setLeaves(response.data);
        }
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  const deleteLeave = (leaveId) => {
    axios
      .delete(`${app}/deleteleave/${leaveId}`)
      .then((response) => {
        alert('Leave deleted successfully!');
        getLeaveDetails();
      })
      .catch((error) => alert('Error: ' + error.message));
  };

  const startEdit = (leave) => {
    setEditingLeave(leave);
    setReason(leave.reason);
    setFromDate(leave.fromDate);
    setToDate(leave.toDate);
  };

  const updateLeave = (e) => {
    e.preventDefault();
    const updatedLeave = {
      ...editingLeave,
      reason,
      fromDate,
      toDate
    };
    axios
      .put(`${app}/updateleave/${editingLeave.id}`, updatedLeave)
      .then((response) => {
        alert('Leave updated successfully!');
        setEditingLeave(null);
        getLeaveDetails();
      })
      .catch((error) => alert('Error: ' + error.message));
  };

  let back=()=>
      {
        navigate('/employeedashboard'); 
      }

  return (
    <div>
      <h2>Leave Status</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Reason</th>
            <th>FromDate</th>
            <th>ToDate</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={leave.id || index}>
              <td>{leave.employeeId}</td>
              <td>{leave.employeeName}</td>
              <td>{leave.reason}</td>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.status}</td>
              <td>
                <button className="btn btn-primary" onClick={() => startEdit(leave)}>Update</button>
                <button className="btn btn-danger" onClick={() => deleteLeave(leave.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingLeave && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Update Leave</h3>
          <form onSubmit={updateLeave}>
            <div>
              <label>Employee ID: </label>
              <input type="text" value={editingLeave.employeeId} readOnly />
            </div>
            <div>
              <label>Employee Name: </label>
              <input type="text" value={editingLeave.employeeName} readOnly />
            </div>
            <div>
              <label>Reason: </label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <div>
              <label>From Date: </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div>
              <label>To Date: </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
            <button type="submit">Save Changes</button>
            <button
              type="button"
              onClick={() => setEditingLeave(null)}
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <button className="btn btn-dark" onClick={back}>Go Back</button>
    </div>
  );
}
