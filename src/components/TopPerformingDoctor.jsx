import React from 'react'

const topDoctors = [
  { name: 'Dr. Gupta', consultations: '3 Consultations - 180' },
  { name: 'Dr. Sharma', consultations: '4 Consultations - 150' },
]

function TopPerformingDoctor() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Top-Performing Doctors (This Month)</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
            <tr>
              <th className="px-6 py-3">Doctor Name</th>
              <th className="px-6 py-3">Consultations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {topDoctors.map((doctor, index) => (
              <tr key={index} className="transition hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">{doctor.name}</td>
                <td className="px-6 py-4 text-slate-700">{doctor.consultations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopPerformingDoctor
