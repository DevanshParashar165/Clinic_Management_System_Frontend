import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Appointments from './pages/Appointments'
import Doctors from './pages/Doctors'

function AppContent() {
  const location = useLocation()
  const showNavbar = location.pathname !== '/'

  return (
    <div className="min-h-screen flex bg-gray-50">
      {showNavbar && (
        <aside className="w-72 bg-white border-r-0 border-gray-200 p-4">
          <Navbar />
        </aside>
      )}

      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/doctors" element={<Doctors/>} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
