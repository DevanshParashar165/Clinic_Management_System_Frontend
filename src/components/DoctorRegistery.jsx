import React from 'react'
import doctorIcon from '../assets/doctor.svg'

const doctors = [
  {
    name: 'Dr. Maria Chen',
    specialty: 'Pediatrics',
    experience: '8 Years',
    contact: '+91 9876543210',
    status: 'Available',
  },
  {
    name: 'Dr. Vikas Gupta',
    specialty: 'GP',
    experience: '15 Years',
    contact: '+91 9876543210',
    status: 'Available',
  },
  {
    name: 'Dr. Anya Sharma',
    specialty: 'Cardiology',
    experience: '15 Years',
    contact: '+91 9876543210',
    status: 'In Consultation',
  },
  {
    name: 'Dr. Maria Chen',
    specialty: 'GP',
    experience: '19 Years',
    contact: '+91 9876543210',
    status: 'In Consultation',
  },
  {
    name: 'Dr. Vikas Gupta',
    specialty: 'Cardiology',
    experience: '15 Years',
    contact: '+91 9876543210',
    status: 'Available',
  },
  {
    name: 'Dr. Anya Sharma',
    specialty: 'Pediatrics',
    experience: '15 Years',
    contact: '+91 9876543210',
    status: 'Available',
  },
  {
    name: 'Dr. Maria Chen',
    specialty: 'Pediatrics',
    experience: '15 Years',
    contact: '+91 9876543210',
    status: 'Available',
  },
]

function DoctorRegistery() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Doctor Registry</h1>
          <p className="mt-1 text-sm text-slate-500">
            Review doctor availability, specialties, experience and contacts.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
            <tr>
              <th className="px-6 py-4">Profile</th>
              <th className="px-6 py-4">Doctor Name</th>
              <th className="px-6 py-4">Specialty</th>
              <th className="px-6 py-4">Experience (Years)</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {doctors.map((doctor, index) => (
              <tr key={index} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={doctorIcon}
                      alt={doctor.name}
                      className="h-10 w-10 rounded-full border border-gray-200 bg-slate-100 p-2"
                    />
                    <span className="text-sm font-medium text-slate-800">{doctor.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-700">{doctor.name}</td>
                <td className="px-6 py-4 text-slate-700">{doctor.specialty}</td>
                <td className="px-6 py-4 text-slate-700">{doctor.experience}</td>
                <td className="px-6 py-4 text-slate-700">{doctor.contact}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      doctor.status === 'Available'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {doctor.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DoctorRegistery
