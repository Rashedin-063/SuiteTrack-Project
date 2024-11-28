import React from 'react'

export default function TopSection({heading, subheading}) {
  return (
    <div className='flex flex-col items-center'>
        <h3 className='text-black font-semibold text-center text-3xl'>SuitTrack</h3>
        <h3 className='font-semibold text-center text-xl text-gray-500'>{heading}</h3>
        <p className='font-semibold text-center'>{subheading}</p>
    </div>
  )
}
