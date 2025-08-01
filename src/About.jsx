import React from 'react'
import CommonNavbar from './CommonNavbar'

export default function About() {
  return (
    <div>
      <CommonNavbar></CommonNavbar>
      <div className="container mt-4">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-4">
            <h1 className="card-title text-center mb-4 text-primary fw-bold">
              About Our Employee Management System
            </h1>
            <p className="card-text fs-5 text-muted">
              Our <span className="fw-semibold text-dark">Employee Management System</span> is a simple yet powerful
              web application designed to help organizations manage their workforce efficiently.
            </p>
            <p className="card-text fs-5 text-muted">
              Admins can easily <span className="text-success">add</span>, <span className="text-warning">update</span>,
              <span className="text-info"> search</span>, and <span className="text-danger">delete</span> employee records
              with a user‑friendly dashboard.
            </p>
            <p className="card-text fs-5 text-muted">
              Built with <span className="fw-semibold">React</span> on the frontend and a REST API backend, it ensures
              a smooth, responsive, and secure experience.
            </p>
            <div className="text-center mt-4">
              <button className="btn btn-primary px-4 py-2 rounded-pill shadow-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
