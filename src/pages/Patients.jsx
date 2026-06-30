import React from 'react'
import Header from '../components/Header'
import patientAvatar from '../assets/patient.svg'

const patientData = [
  {
    id: 'P001',
    name: 'Vikram Singh',
    dobAge: '09/15/19 (30)',
    gender: 'Male',
    bloodGroup: 'A+',
    contact: '0332-3678500',
    lastVisit: '08/10/2023',
    totalVisits: 11,
    primaryDoctor: 'Dr. Vikas Gupta',
    status: 'Active',
  },
  {
    id: 'P002',
    name: 'Priya Sharma',
    dobAge: '12/09/19 (36)',
    gender: 'Female',
    bloodGroup: 'B',
    contact: '0332-3678900',
    lastVisit: '28/10/2023',
    totalVisits: 7,
    primaryDoctor: 'Dr. Vikas Gupta',
    status: 'Active',
  },
  {
    id: 'P003',
    name: 'Ramesh Patel',
    dobAge: '08/13/19 (30)',
    gender: 'Male',
    bloodGroup: 'B',
    contact: '0332-5678300',
    lastVisit: '26/12/2023',
    totalVisits: 4,
    primaryDoctor: 'Dr. Vikas Gupta',
    status: 'Inactive',
  },
  {
    id: 'P004',
    name: 'Kavita Devi',
    dobAge: '13/12/19 (16)',
    gender: 'Male',
    bloodGroup: 'A',
    contact: '0332-5678900',
    lastVisit: '08/12/2023',
    totalVisits: 3,
    primaryDoctor: 'Dr. Anya Sharma',
    status: 'Inactive',
  },
  {
    id: 'P005',
    name: 'Ajay Kumar',
    dobAge: '14/09/19 (30)',
    gender: 'Female',
    bloodGroup: 'B-',
    contact: '0332-3678300',
    lastVisit: '09/12/2023',
    totalVisits: 4,
    primaryDoctor: 'Dr. Vikas Gupta',
    status: 'Active',
  },
  {
    id: 'P006',
    name: 'Meera Reddy',
    dobAge: '20/17/19 (46)',
    gender: 'Male',
    bloodGroup: 'B+',
    contact: '0332-5678300',
    lastVisit: '09/12/2023',
    totalVisits: 2,
    primaryDoctor: 'Dr. Anya Sharma',
    status: 'Inactive',
  },
  {
    id: 'P007',
    name: 'Suresh Gupta',
    dobAge: '05/99/19 (20)',
    gender: 'Male',
    bloodGroup: 'B',
    contact: '0332-9678300',
    lastVisit: '09/12/2023',
    totalVisits: 6,
    primaryDoctor: 'Dr. Anya Sharma',
    status: 'Inactive',
  },
  {
    id: 'P008',
    name: 'Anjali Khan',
    dobAge: '13/13/19 (26)',
    gender: 'Male',
    bloodGroup: 'C',
    contact: '0332-9678300',
    lastVisit: '09/12/2023',
    totalVisits: 1,
    primaryDoctor: 'Dr. Vikas Gupta',
    status: 'Active',
  },
]

function Patients() {
  return (
    <div>
      <Header />

      <div className="mx-auto mt-6 max-w-7xl px-4">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Patient Directory</h1>
              <p className="mt-1 text-sm text-slate-500">Search patient by name, ID, phone, or filter by doctor and status.</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-[320px]">
                <input
                  type="search"
                  placeholder="Search patient by Name, ID, or Phone..."
                  className="w-full rounded-full border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <button className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50">
                Filter
              </button>
              <select className="rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100">
                <option>Filter by Primary Doctor</option>
                <option>Dr. Vikas Gupta</option>
                <option>Dr. Anya Sharma</option>
              </select>
              <select className="rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100">
                <option>Filter by Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
                <tr>
                  <th className="px-6 py-4">Patient ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">DOB/Age</th>
                  <th className="px-6 py-4">Gender</th>
                  <th className="px-6 py-4">Blood Group</th>
                  <th className="px-6 py-4">Contact Number</th>
                  <th className="px-6 py-4">Last Visit Date</th>
                  <th className="px-6 py-4">Total Visits</th>
                  <th className="px-6 py-4">Primary Doctor</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {patientData.map((patient) => (
                  <tr key={patient.id} className="hover:bg-slate-50 transition">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">{patient.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={patientAvatar} alt="Patient" className="h-10 w-10 rounded-full border border-gray-200 bg-slate-100 p-2" />
                        <span className="font-medium text-slate-900">{patient.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{patient.dobAge}</td>
                    <td className="px-6 py-4">{patient.gender}</td>
                    <td className="px-6 py-4">{patient.bloodGroup}</td>
                    <td className="px-6 py-4">{patient.contact}</td>
                    <td className="px-6 py-4">{patient.lastVisit}</td>
                    <td className="px-6 py-4">{patient.totalVisits}</td>
                    <td className="px-6 py-4">{patient.primaryDoctor}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${patient.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button className="text-slate-500 transition hover:text-slate-900">👁️</button>
                        <button className="text-slate-500 transition hover:text-slate-900">✏️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 text-sm text-slate-600">
            <div>Showing 1 to 8 of 80 entries</div>
            <div className="flex items-center gap-2">
              <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">Previous</button>
              <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">1</button>
              <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">2</button>
              <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">3</button>
              <span className="px-2">...</span>
              <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">10</button>
              <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patients
