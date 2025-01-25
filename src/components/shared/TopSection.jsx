import React from 'react'

export default function TopSection({ heading, subheading }) {
    return (
        <div className='flex flex-col items-center space-y-4 text-gray-200'>
            <h3 className=' font-semibold text-center text-3xl lg:text-4xl'>SuitTrack</h3>
            <h3 className='font-semibold text-center text-xl text-gray-200'>{heading}</h3>
            <p className='font-semibold text-center mb-4 text-gray-300'>{subheading}</p>
        </div>
    )
}
