import React from 'react'

function Availability() {
  const availabilityData = [
    { id: '1', name: 'Rahul Patel', specialization: 'Cardiology', schedule: '10:00 - 18:00' },
    { id: '2', name: 'Dr. Vikas Gupta', specialization: 'Pediatrics', schedule: '10:00 - 13:00' },
    { id: '3', name: 'Dr. Vikas Gupta', specialization: 'Pediatrics', schedule: '12:00 - 18:00' },
    { id: '4', name: 'Dr. Vikas Gupta', specialization: 'Pediatrics', schedule: '10:30 - 13:30' },
  ]

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Doctors' Availability</h2>
          <p className="mt-1 text-sm text-slate-500">See who is available and their schedule for today.</p>
        </div>
        <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          View All
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {availabilityData.map((doctor) => (
          <div key={doctor.id} className="flex items-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-sm">
              <span className="text-lg font-bold">D</span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-slate-900">{doctor.name}</h3>
              <p className="text-sm text-slate-600">{doctor.specialization}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white px-3 py-2 text-right text-sm font-semibold text-slate-700">
              <div className="whitespace-nowrap">Schedule</div>
              <div className="mt-1 text-xs text-slate-500">{doctor.schedule}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Availability
