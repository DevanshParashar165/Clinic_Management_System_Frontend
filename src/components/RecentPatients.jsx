import React from 'react'

const dummyPatients = [
  {
    name: 'Aarav Sharma',
    contact: '+91 98765 43210',
    email: 'aarav.sharma@example.com',
    lastVisit: '2026-06-10',
  },
  {
    name: 'Mia Kapoor',
    contact: '+91 91234 56789',
    email: 'mia.kapoor@example.com',
    lastVisit: '2026-06-08',
  },
  {
    name: 'Noah Verma',
    contact: '+91 99876 54321',
    email: 'noah.verma@example.com',
    lastVisit: '2026-06-06',
  },
  {
    name: 'Isha Mehta',
    contact: '+91 94567 82130',
    email: 'isha.mehta@example.com',
    lastVisit: '2026-06-03',
  },
]

function RecentPatients() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Recent Patients</h1>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase tracking-[0.12em] text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-4">Patient Name</th>
              <th scope="col" className="px-6 py-4">Contact</th>
              <th scope="col" className="px-6 py-4">Email</th>
              <th scope="col" className="px-6 py-4">Last Visit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {dummyPatients.map((patient, index) => (
              <tr key={index} className="transition hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">{patient.name}</td>
                <td className="px-6 py-4">{patient.contact}</td>
                <td className="px-6 py-4">{patient.email}</td>
                <td className="px-6 py-4">{patient.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentPatients
