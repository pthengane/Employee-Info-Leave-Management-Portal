import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UpdateLeaveStatus() {

    let navigate = useNavigate();
    let [leavelist, setLeavelist]=useState([]);
let app = "http://16.171.165.29:8080/EmployeeManagementSystemJan-0.0.1-SNAPSHOT" 

    useEffect(() => {
        getleavedataall();
      });

      let getleavedataall=()=>
      {
        axios.get(`${app}/getallleaves`)
        .then((response) => {
        if (response.data) {
          console.log(response.data)
          setLeavelist(response.data);
        }
      })
      .catch((error) => {
        alert('Error while applying leave: ' + error.message);
      });
      }

      let updateleavestatus=(id, action)=>
      {
        axios.put(`${app}/updatestatus/${id}/${action}`)
        .then((response) => {
        if (response.data == "Leave Status Updated Sucessfully!!!!") {
          alert("Leave Status Updated Sucessfully!!!!")
        }
      })
      .catch((error) => {
        alert('Error while applying leave: ' + error.message);
      });
      }

      let rejectleavestatus=(id, action)=>
      {
        axios.put(`${app}/updatestatus/${id}/${action}`)
        .then((response) => {
        if (response.data == "Leave Status Updated Sucessfully!!!!")
             {
          alert("Leave Status Updates Sucessfully!!!!")
        }
      })
      .catch((error) => {
        alert('Error while applying leave: ' + error.message);
      });
      }

      let back=()=>
      {
        navigate('/admindashboard'); 
      }
        
        

  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>EmployeeId</th>
                    <th>EmployeeName</th>
                    <th>Reason</th>
                    <th>From date</th>
                    <th>Todate</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
        <tbody>
            {
                leavelist.map((leave)=>
                    <tr>
                        <td>{leave.employeeId}</td>
                        <td>{leave.employeeName}</td>
                        <td>{leave.reason}</td>
                        <td>{leave.fromDate}</td>
                        <td>{leave.toDate}</td>
                        <td>{leave.status}</td>
                        
                        <td>
                            <button className="btn btn-success"onClick={() => {updateleavestatus(leave.id,"Approved")}}>Accept</button>
                            <button className="btn btn-danger"onClick={() => {rejectleavestatus(leave.id,"Rejected")}}>Reject</button>
                        </td>
                    </tr>
            )}
        </tbody>
        <button className="btn btn-dark" onClick={back}>Go Back</button>


      
    </div>
  )
}
