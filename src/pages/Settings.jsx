import React from 'react'
import Header from '../components/Header'

function Settings() {
  return (
    <div>
      <Header />
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="mt-2 text-sm text-slate-500">Update application preferences and account settings.</p>
      </div>
    </div>
  )
}

export default Settings
