import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'

const data = {
  labels: ['UPI', 'Card', 'Cash', 'Net Banking'],
  datasets: [
    {
      data: [35, 25, 20, 20],
      backgroundColor: ['#0ea5e9', '#16a34a', '#f59e0b', '#ef4444'],
      borderWidth: 0,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { position: 'right', labels: { color: '#334155', boxWidth: 12, padding: 20 } } },
}

function PaymentMethodBreakdown() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">Payment Method Breakdown</h2>
      <div className="mt-3 h-44">
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default PaymentMethodBreakdown
