import React from 'react'
import CommonNavbar from './CommonNavbar'

export default function Service() {
  return (
    <div>
      <CommonNavbar></CommonNavbar>
      <div className="container mt-4">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-4">
            <h1 className="card-title text-center mb-4 text-primary fw-bold">
              Our Services
            </h1>
            <p className="card-text fs-5 text-muted">
              Our Employee Management System offers a range of services to make workforce management seamless and efficient.
            </p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item fs-5">
                 <strong>Employee Records Management:</strong> Add, update, and manage employee information with ease.
              </li>
              <li className="list-group-item fs-5">
                 <strong>Search & Filter:</strong> Quickly find employees by name, department, or designation.
              </li>
              <li className="list-group-item fs-5">
                 <strong>Secure Dashboard:</strong> Only admins can access and modify employee data.
              </li>
              <li className="list-group-item fs-5">
                 <strong>Real-time Updates:</strong> Changes are reflected instantly across the system.
              </li>
            </ul>
            <div className="text-center mt-3">
              <button className="btn btn-info px-4 py-2 rounded-pill shadow-sm text-white">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
