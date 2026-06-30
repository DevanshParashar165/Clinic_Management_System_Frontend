import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import appointment from '../assets/appointment.svg'
import AppointmentManager from '../components/AppointmentManager'
import Calendar from '../components/Calender'

function Appointments() {
  return (
    <div>
      <Header />
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap gap-4 px-4 sm:gap-6">
        <Card image={appointment} heading="Today's Appointments" quantity={28} />
        <Card image={appointment} heading="Pending Confirmation" quantity={12} />
        <Card image={appointment} heading="Completed Today" quantity={14} />
        <Card image={appointment} heading="Available Slot(Day)" quantity={5} />
      </div>
      <div className="flex flex-wrap gap-6 mx-auto mt-6 max-w-6xl px-4">
        <Calendar/>
        <AppointmentManager />
      </div>
    </div>
  )
}

export default Appointments
