import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import BillingSummary from '../components/BillingSummary'
import OutstandingPayments from '../components/OutstandingPayments'
import RevenueBySpecialization from '../components/RevenueBySpecialization'
import PaymentMethodBreakdown from '../components/PaymentMethodBreakdown'
import RecentInvoices from '../components/RecentInvoices'
import billing from '../assets/billing.svg'

function Billing() {
  return (
    <div>
      <Header />
      <div className="mx-auto mt-6 max-w-6xl px-4">
        <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Billing Dashboard</h1>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
            + Create New Invoice
          </button>
        </div>

        <div className="mt-5 grid gap-2 xl:grid-cols-[1.8fr_0.95fr]">
          <div className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <Card heading="Total Invoiced (This Month)" image={billing} quantity="₹ 3.5 Lakh" />
              <Card heading="Outstanding Amount" image={billing} quantity="₹ 1.2 Lakh" />
              <Card heading="Payment Collection Rate" image={billing} quantity="92%" />
            </div>

            <RecentInvoices />
          </div>

          <div className="grid gap-4">
            <OutstandingPayments />
            <RevenueBySpecialization />
            <PaymentMethodBreakdown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
