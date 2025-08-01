import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AddEmployeeForm from './AddEmployeeForm';
import AdminDashboard from './AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateEmployee from './UpdateEmployee';
import Register from './Register';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Service from './Service';
import Adminavbar from './Adminavbar';
import EmployeeDashboard from './EmployeeDashboard';
import LeaveForm from './LeaveForm';
import LeaveApplication from './LeaveApplication';
import ViewLeaveStatus from './ViewLeaveStatus';
import UpdateLeaveStatus from './UpdateLeaveStatus';
import Navdemo from './Navdemo';


function App() {
  return (
    <>

    
    <Routes>
      
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/update/:empid" element={<UpdateEmployee></UpdateEmployee>}></Route>
      <Route path="/addemp" element={<AddEmployeeForm></AddEmployeeForm>}></Route>
      <Route path="/admindashboard" element={<AdminDashboard></AdminDashboard>}></Route>
      <Route path="/employeedashboard" element={<EmployeeDashboard></EmployeeDashboard>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route path="/applyleave" element={<LeaveApplication></LeaveApplication>}></Route>
      <Route path="/viewleave" element={<ViewLeaveStatus></ViewLeaveStatus>}></Route>
      <Route path="/viewallleave" element={<UpdateLeaveStatus></UpdateLeaveStatus>}></Route>
      
    </Routes>
    
    
    </>
  );
}

export default App;
