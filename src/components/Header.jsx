import React from 'react'
import patient from '../assets/patient.svg'
import bell from '../assets/bell.svg'
import security from '../assets/security.svg'
import searchIcon from '../assets/search.svg'

function Header() {
  return (
    <header className="w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center gap-4 sm:gap-6">

          <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition">
                + New Appointment
              </button>

              <button className="hidden sm:flex items-center gap-2 rounded-md border border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50 transition">
                <img src={patient} alt="Register Patient" className="h-4 w-4" />
                <span>Register Patient</span>
              </button>
            </div>

          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative">
                <img src={searchIcon} alt="search" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
                <input
                  type="search"
                  aria-label="Search patients, records, doctors"
                  placeholder="Search patients, records, doctors..."
                  className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            

            <div className="flex items-center gap-4 border-l border-gray-200 pl-4">
              <button aria-label="Notifications" className="relative rounded-md p-2 hover:bg-gray-100">
                <img src={bell} alt="Notifications" className="h-6 w-6" />
                <span className="absolute -right-0.5 -bottom-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M4.5 9.5l2.5 2.5L15.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div className="flex items-center gap-3">
                <img src={security} alt="Security avatar" className="h-10 w-10 rounded-full border border-gray-100" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800">Dr. John Doe</span>
                  <span className="text-xs text-gray-500">Cardiologist</span>
                </div>

                <button aria-label="Open profile menu" className="ml-2 rounded-full p-2 hover:bg-gray-100">
                  <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100" />
    </header>
  )
}

export default Header
