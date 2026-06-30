import React from 'react'
import doctor from '../assets/doctor.svg'

const newOnboardings = [
  { name: 'Dr. Maria Chen', joined: 'Joined 2023' },
  { name: 'Dr. Vikas Gupta', joined: 'Joined 2023' },
  { name: 'Dr. Anya Sharma', joined: 'Joined 2023' },
]

function NewestOnboarding() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-slate-900">Newest Onboardings</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
            <tr>
              <th className="px-6 py-3">Profile</th>
              <th className="px-6 py-3">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {newOnboardings.map((item, index) => (
              <tr key={index} className="transition hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={doctor} alt={item.name} className="h-10 w-10 rounded-full border border-gray-200 bg-slate-100 p-2" />
                    <span className="font-medium text-slate-900">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-700">{item.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NewestOnboarding
