# 🏥 Clinic Management System - Frontend

A modern and responsive React-based frontend for the **Clinic Management System**. This application provides an intuitive user interface for managing clinic operations, including patients, doctors, appointments, prescriptions, and administrative tasks.

---

## 🚀 Features

* 🔐 Secure authentication and authorization
* 👨‍⚕️ Doctor management
* 🧑‍🤝‍🧑 Patient management
* 📅 Appointment scheduling and tracking
* 💊 Prescription management
* 📊 Interactive dashboard with analytics and charts
* 🔍 Search, filtering, and pagination
* 📱 Fully responsive design
* 🌙 Clean and modern user interface

---

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **React Router DOM**
* **Axios**
* **Chart.js**
* **React Chartjs 2**
* **React Icons**
* **React Hook Form**
* **React Hot Toast**

---

## 📁 Project Structure

```text
src/
│
├── assets/            # Images, icons, and static files
├── components/        # Reusable UI components
├── pages/             # Application pages
├── layouts/           # Layout components
├── routes/            # Route configuration
├── services/          # API calls
├── hooks/             # Custom React hooks
├── context/           # Context API
├── utils/             # Utility functions
├── constants/         # Constant values
├── styles/            # Global styles
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project

```bash
cd clinic-management-system/frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Update the URL according to your backend server.

---

## 📸 Screens

* Dashboard
* Login
* Doctor Management
* Patient Management
* Appointment Management
* Prescription Management
* Profile
* Reports

---

## 📊 Dashboard

The dashboard provides:

* Total Patients
* Total Doctors
* Total Appointments
* Revenue Overview
* Appointment Statistics
* Patient Analytics
* Recent Activities

---

## 🌐 API Integration

The frontend communicates with the backend using REST APIs through Axios.

Example:

```javascript
axios.get(`${import.meta.env.VITE_API_BASE_URL}/patients`);
```

---

## 📱 Responsive Design

The application is optimized for:

* Desktop
* Laptop
* Tablet
* Mobile

---

## 🎯 Future Enhancements

* Email notifications
* SMS reminders
* Online payments
* Video consultation
* Multi-clinic support
* Dark mode
* Calendar integration
* PDF prescription generation

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

This project is intended for educational and learning purposes.

---

## 👨‍💻 Author

**Devansh Parashar**

Feel free to contribute, raise issues, or suggest improvements.
