import React from 'react'

const dummyAppointments = [
  {
    patient: 'Emily Johnson',
    doctor: 'Dr. Ananya Singh',
    time: '09:00 AM',
    department: 'Cardiology',
    status: 'Confirmed',
  },
  {
    patient: 'Michael Brown',
    doctor: 'Dr. Rohan Patel',
    time: '10:30 AM',
    department: 'Dermatology',
    status: 'Pending',
  },
  {
    patient: 'Sofia Martinez',
    doctor: 'Dr. Aditi Sharma',
    time: '11:15 AM',
    department: 'Pediatrics',
    status: 'Completed',
  },
  {
    patient: 'Liam Williams',
    doctor: 'Dr. Kavya Rao',
    time: '01:00 PM',
    department: 'Neurology',
    status: 'Confirmed',
  },
]

function UpcomingAppointments() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Upcoming Appointments</h1>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase tracking-[0.12em] text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-4">Patient Name</th>
              <th scope="col" className="px-6 py-4">Doctor</th>
              <th scope="col" className="px-6 py-4">Department</th>
              <th scope="col" className="px-6 py-4">Time</th>
              <th scope="col" className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {dummyAppointments.map((appointment, index) => (
              <tr key={index} className="transition hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">{appointment.patient}</td>
                <td className="px-6 py-4">{appointment.doctor}</td>
                <td className="px-6 py-4">{appointment.department}</td>
                <td className="px-6 py-4">{appointment.time}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      appointment.status === 'Confirmed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : appointment.status === 'Pending'
                        ? 'bg-amber-100 text-amber-700'
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

export default UpcomingAppointments
