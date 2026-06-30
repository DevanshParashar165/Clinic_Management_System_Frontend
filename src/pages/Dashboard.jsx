import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Calender from '../components/Calender'
import patient from '../assets/patient.svg'
import doctor from '../assets/doctor.svg'
import appointment from '../assets/appointment.svg'
import billing from '../assets/billing.svg'
import UpcomingAppointments from '../components/UpcomingAppointments'
import RecentPatients from '../components/RecentPatients'
import Availability from '../components/Availability'
import BillingSummary from '../components/BillingSummary'

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap gap-4 px-4 sm:gap-6">
        <Card image={patient} heading="Patients" quantity={100} />
        <Card image={doctor} heading="Doctors" quantity={50} />
        <Card image={appointment} heading="Appointments" quantity={200} />
        <Card image={billing} heading="Billing" quantity={`$${150}`} />
      </div>
      <div className="flex gap-6 flex-wrap mx-auto mt-6 max-w-6xl px-4">
        <UpcomingAppointments />
        <Calender/>
        <RecentPatients />
        <Availability/>
        <BillingSummary/>
      </div>
    </div>
  )
}

export default Dashboard
