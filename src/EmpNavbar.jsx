import React from 'react';
import { Link } from 'react-router-dom';

export default function EmpNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
         
          <Link to="/" className="navbar-brand fw-bold fs-4 ms-3">
            EMS
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#empNavbar"
            aria-controls="empNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="empNavbar">
           
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white px-3 fw-semibold">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/applyleave" className="nav-link text-white px-3 fw-semibold">
                  Apply Leave
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/viewleave" className="nav-link text-white px-3 fw-semibold">
                  View Leave Status
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white px-3 fw-semibold">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white px-3 fw-semibold">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link text-white px-3 fw-semibold">
                  Service
                </Link>
              </li>
            </ul>

            
            <form className="d-flex me-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-warning text-dark fw-bold"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
