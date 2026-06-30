import React from 'react'

const invoices = [
  { id: '00001931', patient: 'Vikram Singh', date: '02-11-2023', amount: '₹ 3.5 Lakh', status: 'Paid' },
  { id: '00001932', patient: 'Maria Chen', date: '02-11-2023', amount: '₹ 1.2 Lakh', status: 'Unpaid' },
  { id: '00001933', patient: 'Rahul Patel', date: '02-11-2023', amount: '₹ 7,50.00', status: 'Pending' },
  { id: '00001934', patient: 'Kavita Devi', date: '02-11-2023', amount: '₹ 2,00.00', status: 'Pending' },
  { id: '00001955', patient: 'Vikram Singh', date: '02-11-2023', amount: '₹ 2,50.00', status: 'Pending' },
  { id: '00001956', patient: 'Maria Chen', date: '02-11-2023', amount: '₹ 3,00.00', status: 'Partial' },
  { id: '00001957', patient: 'Rahul Patel', date: '02-11-2023', amount: '₹ 2,30.00', status: 'Pending' },
  { id: '00001958', patient: 'Kavita Devi', date: '02-11-2023', amount: '₹ 1,30.00', status: 'Partial' },
]

const statusStyles = {
  Paid: 'bg-emerald-100 text-emerald-700',
  Unpaid: 'bg-rose-100 text-rose-700',
  Pending: 'bg-amber-100 text-amber-700',
  Partial: 'bg-amber-100 text-amber-700',
}

function RecentInvoices() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Recent Invoices & Payments</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <select className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none">
            <option>Status</option>
            <option>Paid</option>
            <option>Unpaid</option>
            <option>Pending</option>
            <option>Partial</option>
          </select>
          <select className="rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none">
            <option>Date Range</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This quarter</option>
          </select>
          <input
            type="search"
            placeholder="Search Invoices..."
            className="rounded-full border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
            <tr>
              <th className="px-6 py-4">Invoice ID</th>
              <th className="px-6 py-4">Patient Name</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Total Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 font-medium text-slate-900">{invoice.id}</td>
                <td className="px-6 py-4">{invoice.patient}</td>
                <td className="px-6 py-4">{invoice.date}</td>
                <td className="px-6 py-4">{invoice.amount}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[invoice.status]}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-3 text-sm text-slate-600">
                  <button className="transition hover:text-slate-900">View</button>
                  <button className="transition hover:text-slate-900">Print</button>
                  <button className="transition hover:text-slate-900">Send</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 text-sm text-slate-600">
        <div>Showing 1 to 8 of 80 entries</div>
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">Previous</button>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">1</button>
          <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">2</button>
          <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">3</button>
          <span className="px-2">...</span>
          <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">10</button>
          <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  )
}

export default RecentInvoices
