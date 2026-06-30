import React from 'react'

function Card(props) {
  return (
    <div className="flex w-70 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <img src={props.image} alt={props.heading} className="h-12 w-12" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-slate-800">{props.heading}</h3>
        <p className="text-2xl font-bold text-slate-600">{props.quantity}</p>
      </div>
    </div>
  )
}

export default Card
