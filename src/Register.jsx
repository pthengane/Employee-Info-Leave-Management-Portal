import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();
  let [visible, setVisible] = useState(true);

  let [firstname, setFirstname] = useState('');
  let [lastname, setLastname] = useState('');
  let [email, setEmail] = useState('');
  let [contactno, setContactno] = useState('');
  let [gender, setGender] = useState('');
  let [role, setRole] = useState('');
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [confirmpassword, setConfirmpassword] = useState('');
  let [empid, setEmpid] = useState('');
let app = "http://16.171.165.29:8080/EmployeeManagementSystemJan-0.0.1-SNAPSHOT" 
             
  

  const validation = () => {
    if (
      !firstname || !lastname || !email || !contactno || !gender || !role ||
      !username || !password || !confirmpassword
    ) {
      alert("Please fill all the fields");
      return false;
    }
    if (!/^[A-Za-z\s]{2,30}$/.test(firstname)) {
      alert("Please enter a valid first name");
      return false;
    }
    if (!/^[A-Za-z\s]{2,30}$/.test(lastname)) {
      alert("Please enter a valid last name");
      return false;
    }
    if (!/^\d{10}$/.test(contactno)) {
      alert("Please enter a valid 10-digit contact number");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email");
      return false;
    }
    if (password.length < 8 || password.length > 13) {
      alert("Password must be 8-13 characters long");
      return false;
    }
    if (password !== confirmpassword) {
      alert("Password and Confirm Password do not match");
      return false;
    }
    return true;
  };

  let handleRegister = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  let goToLogin = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  let register = (e) => {
    e.preventDefault();
    if (validation()) {
      let emp = {
        firstname,
        lastname,
        email,
        contactno,
        gender,
        role,
        username,
        password,
        empid
      };

      axios.post(`${app}/register`, emp)
        .then((response) => {
          alert("Registered successfully");
          setVisible(true);
        })
        .catch((error) => {
          alert("Error while registering: " + error.message);
        });
    }
  };

  let login = (e) => {
    e.preventDefault();
    let user = { username, password };

    axios.post(`${app}/login`, user)
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          const role = response.data.role?.toLowerCase().trim();

          if (role === 'admin') {
            navigate("/admindashboard");
          } else if (role === 'employee') {
            navigate("/employeedashboard");
          } else {
            alert("Unknown role. Access denied.");
          }
        }
      })
      .catch(() => {
        alert("Invalid Credentials");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" style={{background: "linear-gradient(135deg, #e0eafc, #cfdef3)"}}>
      <div className="w-100" style={{maxWidth: "500px"}}>
        {visible ? (
          <div className="card shadow-lg rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 text-primary">Login</h2>
              <form onSubmit={login}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Username</label>
                  <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary w-50 me-2">Login</button>
                  <button onClick={handleRegister} className="btn btn-outline-secondary w-50 ms-2">Register</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="card shadow-lg rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 text-success">Register</h2>
              <form onSubmit={register}>
                <input type="text" placeholder="First Name" className="form-control mb-3" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" placeholder="Last Name" className="form-control mb-3" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type="text" placeholder="Email" className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Contact No" className="form-control mb-3" value={contactno} onChange={(e) => setContactno(e.target.value)} />

                <div className="mb-3">
                  <label className="form-label me-3">Gender:</label>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">-- Select Role --</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>

                <input type="text" placeholder="Username" className="form-control mb-3" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" className="form-control mb-3" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                <input type="text" placeholder="Employee ID" className="form-control mb-4" value={empid} onChange={(e) => setEmpid(e.target.value)} />

                <div className="d-flex justify-content-between">
                  <button onClick={goToLogin} className="btn btn-outline-secondary w-50 me-2">Login</button>
                  <input type="submit" className="btn btn-success w-50 ms-2" value="Register" />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
