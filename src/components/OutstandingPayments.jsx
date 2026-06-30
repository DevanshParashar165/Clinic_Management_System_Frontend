import React from 'react'

const outstanding = [
  { rank: 1, name: 'Vikram Singh', amount: '₹ 3.5 Lakh' },
  { rank: 2, name: 'Maria Chen', amount: '₹ 1.2 Lakh' },
  { rank: 3, name: 'Rahul Patel', amount: '₹ 1.2 Lakh' },
]

function OutstandingPayments() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-4 ml-16 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">Outstanding Payments</h2>
      <div className="mt-3 space-y-2">
        {outstanding.map((item) => (
          <div key={item.rank} className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {item.rank}
              </div>
              <span className="font-medium text-slate-800">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-slate-900">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OutstandingPayments
