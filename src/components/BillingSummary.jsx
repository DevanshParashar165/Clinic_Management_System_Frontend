import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

function BillingSummary() {
  const chartRef = useRef(null)

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d')
    if (!ctx) return

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Cash', 'Card', 'UPI', 'Net Banking'],
        datasets: [
          {
            data: [35, 25, 20, 20],
            backgroundColor: ['#2563eb', '#64748b', '#22c55e', '#ef4444'],
            borderWidth: 0,
            hoverOffset: 12,
          },
        ],
      },
      options: {
        cutout: '72%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.formattedValue}%`,
            },
          },
        },
      },
    })

    return () => chart.destroy()
  }, [])

  const legendItems = [
    { label: 'Cash', color: 'bg-blue-600' },
    { label: 'Card', color: 'bg-slate-500' },
    { label: 'UPI', color: 'bg-emerald-500' },
    { label: 'Net Banking', color: 'bg-red-500' },
  ]

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Billing Summary</h2>
          <p className="mt-1 text-sm text-slate-500">Payment breakdown by billing method.</p>
        </div>
        <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          View All
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_auto] lg:items-center">
        <div className="relative h-72 w-full rounded-3xl bg-slate-50 p-4 shadow-sm">
          <canvas ref={chartRef} className="h-full w-full" />
        </div>

        <div className="grid gap-3">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className={`inline-block h-3.5 w-3.5 rounded-full ${item.color}`} />
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
              <span className="text-sm font-semibold text-slate-900">{item.label === 'Cash' ? '35%' : item.label === 'Card' ? '25%' : item.label === 'UPI' ? '20%' : '20%'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BillingSummary
