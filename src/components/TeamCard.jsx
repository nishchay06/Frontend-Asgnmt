import React from "react"
import Card from "./Card"

const TeamCard = () => {
  return (
    <div>
      <div className='block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
        <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 '>
          Team
        </h5>
        <p className='font-normal text-gray-700 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          cursus felis. Ut quis nisl nibh. Aenean tristique sodales erat, vitae
          pellentesque leo placerat et.
        </p>
        <div>
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </div>
  )
}

export default TeamCard
