import React ,{useState} from 'react'
import hospitalLogo from '../assets/hospital.svg'
import appointment from '../assets/appointment.svg'
import doctors from '../assets/doctor.svg'
import patients from '../assets/patient.svg'
import specializations from '../assets/specialization.svg'
import Billing from '../assets/billing.svg'
import settings from '../assets/settings.svg'
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: 'Dashboard', icon: hospitalLogo, alt: 'Dashboard' ,route : '/dashboard'},
  { label: 'Appointments', icon: appointment, alt: 'Appointments' ,route : '/appointments'},
  { label: 'Doctors', icon: doctors, alt: 'Doctors' ,route : '/doctors'},
  { label: 'Patients', icon: patients, alt: 'Patients' ,route : '/patients'},
  { label: 'Specializations', icon: specializations, alt: 'Specializations' ,route : '/specializations'},
  { label: 'Billing', icon: Billing, alt: 'Billing' ,route : '/billing'},
  { label: 'Settings', icon: settings, alt: 'Settings' ,route : '/settings'},
]

function Navbar() {

  const navigate = useNavigate();

  const handleNavigation = (label) => {
    navigate(`${label}`);
  }

  return (
    <div className="h-screen p-4">
      <div className="flex h-full flex-col bg-white px-4 py-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
            <img src={hospitalLogo} alt="Clinic360 logo" className="h-7 w-7" />
          </div>
          <div>
            <p className="font-sans text-sm font-semibold tracking-wide text-slate-800">CLINIC 360</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">Control Center</p>
          </div>
        </div>

        <nav aria-label="Sidebar navigation" className="w-full">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavigation(item.route)}
                  type="button"
                  className="flex w-full items-center justify-start gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition duration-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  <img src={item.icon} alt={item.alt} className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
