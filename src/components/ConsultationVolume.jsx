import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

const data = {
  labels: ['Dr. Gupta', 'Dr. Sharma', 'Dr. Mehta', 'Dr. Rao', 'Dr. Sen', 'Dr. Verma'],
  datasets: [
    {
      label: 'Consultations',
      data: [85, 50, 90, 55, 65, 80],
      backgroundColor: '#2563eb',
      borderRadius: 8,
      barThickness: 28,
      maxBarThickness: 36,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#64748b' },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: { color: '#64748b' },
      grid: { color: 'rgba(148, 163, 184, 0.2)' },
    },
  },
}

function ConsultationVolume() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Consultation Volume by Doctor (This Quarter)</h2>
      </div>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default ConsultationVolume
