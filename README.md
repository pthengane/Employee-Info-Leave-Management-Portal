# 🧑‍💼 Employee Information and Leave Management Portal

A full-stack **Employee Information and Leave Management System** built with **ReactJS**, **Spring Boot**, and **MySQL**. This project includes both **Admin** and **Employee Dashboards**, offering full CRUD and workflow capabilities for HR operations.

---

## ✅ Key Highlights

• Developed a full-stack **Employee Information and Leave Management Portal** using **React** and **Spring Boot** with **MySQL**.  
• Implemented core features including **employee record management**, **leave application**, **update**, **cancellation**, and **leave status**.  
• Built admin functionalities to **review**, **approve**, or **reject leave requests**, ensuring smooth workflow and efficient HR operations.  

---

## 🚀 Features

### 👨‍💼 Admin Dashboard
- 🔍 View All Employees
- 👤 Search Employees (by first name, last name, designation, department)
- 🗃️ Add / Update / Delete Employees
- 📬 View & Act on Leave Requests
- 🔐 Logout

### 👨‍💻 Employee Dashboard
- 📄 View Profile
- 📝 Apply for Leave
- ❌ Cancel Leave
- ⏳ Track Leave Status
- 🔐 Logout

### 📄 Public Pages
- 🏠 Home
- 📃 About
- 📞 Contact Us
- 💼 Services

---

## 🛠️ Tech Stack

| Layer      | Tech Used              |
|------------|------------------------|
| Frontend   | ReactJS, Bootstrap 5   |
| Backend    | Spring Boot (Java)     |
| Database   | MySQL                  |
| API Client | Axios                  |
| Routing    | React Router DOM       |

---

## 🗂️ Project Structure

```plaintext
src/
│
├── components/
│   ├── AdminDashboard.js
│   ├── EmployeeDashboard.js
│   ├── LeaveApplication.js
│   ├── Adminavbar.js
│   ├── CommonNavbar.js
│   ├── About.js
│   ├── ContactUs.js
│   ├── Service.js
│
├── App.js
├── index.js
└── ...

```

## 🔧 Installation & Run Locally

### Prerequisites
- Node.js and npm installed
- Backend (Spring Boot) running on `localhost:8080`

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/pthengane/employee-management-system.git

# 2. Navigate to project directory
cd employee-management-system

# 3. Install dependencies
npm install

# 4. Start the React app
npm start
```

## 🌐 Backend API Endpoints Used

```bash

GET    /findallemp
DELETE /deleteemp/{id}
GET    /getempbyfirstname/{name}
GET    /getempbylastname/{name}
GET    /getempbydesig/{designation}
GET    /getempbydept/{department}

```



## 📩 Contact
For queries or support, feel free to reach out:

📧 Email: support@ems.com


## 📃 License
This project is licensed under the MIT License.


---



