import React from 'react'

const dummyAppointments = [
  {
    date: '2024-05-15',
    time: '10:30 AM',
    patient: 'Rahul Patel',
    doctor: 'Dr. Vikas Gupta',
    specialty: 'Pediatrics',
    type: 'Online',
    status: 'Scheduled',
  },
  {
    date: '2024-05-15',
    time: '11:15 AM',
    patient: 'Maria Chen',
    doctor: 'Dr. Anya Sharma',
    specialty: 'GP',
    type: 'Walk-in',
    status: 'Checked-in',
  },
  {
    date: '2024-05-16',
    time: '09:00 AM',
    patient: 'Sam Jones',
    doctor: 'Dr. Vikas Gupta',
    specialty: 'Pediatrics',
    type: 'Follow-up',
    status: 'Scheduled',
  },
  {
    date: '2024-05-16',
    time: '10:30 AM',
    patient: 'Martha Shum',
    doctor: 'Dr. Vikas Gupta',
    specialty: 'Pediatrics',
    type: 'Follow-up',
    status: 'Scheduled',
  },
  {
    date: '2024-05-18',
    time: '07:00 PM',
    patient: 'Sam Jones',
    doctor: 'Dr. Vikas Gupta',
    specialty: 'Pediatrics',
    type: 'Follow-up',
    status: 'Scheduled',
  },
]

function AppointmentManager() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Appointments Manager</h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage upcoming appointments, doctor filters, and status tracking.
          </p>
        </div>

        <button className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          + New Appointment
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 rounded-full border border-gray-200 bg-slate-50 p-3">
        <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          All Appointments
        </button>
        <select className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none">
          <option>Filter by Doctor</option>
          <option>Dr. Vikas Gupta</option>
          <option>Dr. Anya Sharma</option>
        </select>
        <select className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none">
          <option>Filter by Status</option>
          <option>Scheduled</option>
          <option>Checked-in</option>
          <option>Completed</option>
        </select>
        <button className="ml-auto rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
          Filter by Date Range
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-gray-200 bg-white">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase tracking-[0.12em] text-gray-500">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Patient Name</th>
              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4">Specialty</th>
              <th className="px-6 py-4">Appointment Type</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {dummyAppointments.map((appointment, index) => (
              <tr key={index} className="transition hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">{appointment.date}</td>
                <td className="px-6 py-4">{appointment.time}</td>
                <td className="px-6 py-4">{appointment.patient}</td>
                <td className="px-6 py-4">{appointment.doctor}</td>
                <td className="px-6 py-4">{appointment.specialty}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {appointment.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      appointment.status === 'Scheduled'
                        ? 'bg-sky-100 text-sky-700'
                        : appointment.status === 'Checked-in'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {appointment.status}
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

export default AppointmentManager
