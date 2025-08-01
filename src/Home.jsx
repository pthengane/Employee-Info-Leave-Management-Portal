import React from 'react';
import HomeNavbar from './HomeNavbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      <HomeNavbar />

      
      <div
        className="text-center text-dark py-5"
        style={{
          background: 'linear-gradient(135deg, #0d6efd, #6ea8fe)',
          color: 'white',
        }}
      >
        <h1 className="display-4 fw-bold">Welcome to Employee Management System</h1>
        <p className="lead mt-3">
          Manage employees efficiently with our smart dashboard and tools.
        </p>
        <button className="btn btn-light btn-lg mt-3 shadow-sm">
          Get Started
        </button>
      </div>

      
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Our Highlights</h2>
        <div className="d-flex justify-content-center">
          <div
            id="carouselExampleIndicators"
            className="carousel slide shadow rounded overflow-hidden"
            data-bs-ride="carousel"
            data-bs-interval="500"
            style={{
              width: '800px',
              height: '450px',
              backgroundColor: '#fff',
            }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner" style={{ height: '100%' }}>
              <div className="carousel-item active">
                <img
                  src="https://th.bing.com/th/id/OIP.6GPYPBN8KFIOuOSw88ViWQHaET?w=320&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                  className="d-block w-100"
                  alt="slide1"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2023/11/Employee-Management-System.png"
                  className="d-block w-100"
                  alt="slide2"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://tse4.mm.bing.net/th/id/OIP.q0b0lWdKYlQHYYhGllnvMQHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"
                  className="d-block w-100"
                  alt="slide3"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      
      <footer className="text-center py-4 bg-light mt-5 border-top">
        <p className="mb-0 text-muted">© 2025 Employee Management System</p>
      </footer>
    </div>
  );
}
