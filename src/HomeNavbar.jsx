import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          
          <Link to="/" className="navbar-brand fw-bold fs-4 ms-3">
            Employee<span className="text-warning">Portal</span>
          </Link>

         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex mx-auto my-2">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning text-dark fw-bold" type="submit">
                Search
              </button>
            </form>

            
            <div className="d-flex align-items-center me-3">
              <Link
                to="/register"
                className="btn btn-outline-light fw-semibold"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
