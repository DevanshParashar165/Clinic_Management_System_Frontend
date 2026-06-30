import React from 'react'

const scheduleCards = [
  {
    name: 'Dr. Vikas Gupta',
    hours: ['Mon-Fri: 10:00-14:00', '16:00-18:00'],
  },
  {
    name: 'Dr. Vikas Gupta',
    hours: ['Mon-Fri: 10:00-14:00', '16:00-18:00'],
  },
  {
    name: 'Dr. Vikas Gupta',
    hours: ['Mon-Fri: 10:00-14:00', '16:00-18:00'],
  },
]

function Scheduling() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Doctor Scheduling</h2>
        <p className="mt-1 text-sm text-slate-500">Upcoming availability for top doctors.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {scheduleCards.map((card, index) => (
          <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">{card.name}</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              {card.hours.map((hour, idx) => (
                <p key={idx} className="rounded-2xl bg-white px-3 py-2 shadow-sm">{hour}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Scheduling
