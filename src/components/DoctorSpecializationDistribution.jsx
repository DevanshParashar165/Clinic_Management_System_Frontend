import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'

const data = {
  labels: ['GP', 'Pediatrics', 'Cardiology', 'Ortho'],
  datasets: [
    {
      data: [35, 25, 20, 20],
      backgroundColor: ['#f97316', '#fb923c', '#fca5a5', '#fde68a'],
      borderColor: ['#f97316', '#fb923c', '#fca5a5', '#fde68a'],
      borderWidth: 2,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '72%',
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.parsed}%`,
      },
    },
  },
}

function DoctorSpecializationDistribution() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-slate-900">Doctor Specialization Distribution</h1>
        <p className="mt-1 text-sm text-slate-500">Visualize the specialty mix across the doctor team.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[240px_auto] lg:items-center">
        <div className="h-72">
          <Pie data={data} options={options} />
        </div>

        <div className="grid gap-3">
          {data.labels.map((label, index) => (
            <div key={label} className="flex items-center gap-3 rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3">
              <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: data.datasets[0].backgroundColor[index] }} />
              <span className="text-sm font-medium text-slate-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorSpecializationDistribution
