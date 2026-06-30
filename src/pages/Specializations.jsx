import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import specialization from '../assets/specialization.svg'
import growth from '../assets/growth.svg'

const specializations = [
  {
    name: 'General Practitioner (GP)',
    description: 'General medical care, preventative services, and acute illnesses.',
    doctors: 5,
    patients: 450,
    status: 'Active',
  },
  {
    name: 'Pediatrics',
    description: 'Specialized health care for children from newborns to teenagers.',
    doctors: 4,
    patients: 320,
    status: 'Active',
  },
  {
    name: 'Cardiology',
    description: 'Diagnosis and treatment of heart and vascular conditions.',
    doctors: 3,
    patients: 180,
    status: 'Active',
  },
  {
    name: 'Orthopedics',
    description: 'Care for bone, joint, and muscle conditions and injuries.',
    doctors: 2,
    patients: 120,
    status: 'Active',
  },
  {
    name: 'Internal Medicine',
    description: 'Advanced medical care for complex adult diseases.',
    doctors: 2,
    patients: 90,
    status: 'Active',
  },
  {
    name: 'Neurology',
    description: 'Care for conditions affecting the brain and nervous system.',
    doctors: 2,
    patients: 80,
    status: 'Active',
  },
  {
    name: 'Dermatology',
    description: 'Specialized medical and cosmetic skin, hair, and nail care.',
    doctors: 2,
    patients: 70,
    status: 'Active',
  },
]

function Specializations() {
  return (
    <div>
      <Header />

      <div className="mx-auto mt-6 max-w-7xl px-4">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card heading="Total Specializations" image={specialization} quantity={11} />
          <Card heading="Most Popular (patients)" image={growth} quantity="GP - 450" />
          <Card heading="New Specializations" image={specialization} quantity={3} />
        </div>

        <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Specializations Registry</h1>
              <p className="mt-1 text-sm text-slate-500">Search and manage specialty categories for doctors and patients.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="search"
                placeholder="Search specializations..."
                className="w-full rounded-full border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100 sm:w-80"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
                <tr>
                  <th className="px-6 py-4">Specialization Name</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Count of Doctors</th>
                  <th className="px-6 py-4">Count of Patients</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {specializations.map((item, index) => (
                  <tr key={index} className="transition hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 text-slate-700">{item.description}</td>
                    <td className="px-6 py-4">{item.doctors}</td>
                    <td className="px-6 py-4">{item.patients}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 text-slate-500">
                        <button className="transition hover:text-slate-900">👁️</button>
                        <button className="transition hover:text-slate-900">✏️</button>
                        <button className="transition hover:text-red-600">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 text-sm text-slate-600">
            <div>Showing 1 to 7 of 7 entries</div>
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

export default Specializations
