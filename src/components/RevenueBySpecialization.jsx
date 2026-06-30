import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

const data = {
  labels: ['GP', 'Pediatrics', 'Cardiology', 'Ortho'],
  datasets: [
    {
      label: 'Revenue',
      data: [90, 70, 60, 55],
      backgroundColor: ['#2563eb', '#4f46e5', '#16a34a', '#0ea5e9'],
      borderRadius: 8,
      barThickness: 22,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: '#64748b' } },
    y: { beginAtZero: true, grid: { color: 'rgba(148, 163, 184, 0.2)' }, ticks: { color: '#64748b' } },
  },
}

function RevenueBySpecialization() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">Revenue by Specialization</h2>
      <div className="mt-3 h-44">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default RevenueBySpecialization
