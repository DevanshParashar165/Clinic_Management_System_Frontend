import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import doctor from '../assets/doctor.svg'
import specialization from '../assets/specialization.svg'
import patient from '../assets/patient.svg'
import DoctorRegistery from '../components/DoctorRegistery'

function Doctors() {
  return (
    <div>
      <Header />
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap gap-4 px-4 sm:gap-6">
        <Card image={doctor} heading="Total Doctors" quantity={12} />
        <Card image={specialization} heading="Specialities" quantity={9} />
        <Card image={patient} heading="Average Consults/Day" quantity="12 per doctor" />
      </div>
      <div className="flex gap-6 flex-wrap mx-auto mt-6 max-w-6xl px-4">
        <DoctorRegistery/>
        </div>
    </div>
  )
}

export default Doctors
