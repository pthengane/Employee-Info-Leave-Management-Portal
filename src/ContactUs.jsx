import React from 'react'
import CommonNavbar from './CommonNavbar'

export default function ContactUs() {
  return (
    <div>
      <CommonNavbar></CommonNavbar>
      <div className="container mt-4">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-4">
            <h1 className="card-title text-center mb-4 text-primary fw-bold">
              Contact Us
            </h1>
            <p className="card-text fs-5 text-muted">
              Have questions or need assistance? Feel free to reach out to our support team.  
              We are here to help you with any queries about the Employee Management System.
            </p>
            <ul className="list-unstyled fs-5 text-muted">
              <li><strong>Email:</strong> <a href="mailto:support@hefshine.com" className="text-decoration-none text-dark">support@hefshine.com</a></li>
              <li><strong>Phone:</strong> <span className="text-dark">+91 9022808933</span></li>
              <li><strong>Address:</strong> <span className="text-dark">Hefshine Softwares, Pune, India</span></li>
            </ul>
            <div className="text-center mt-4">
              <button className="btn btn-success px-4 py-2 rounded-pill shadow-sm">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
