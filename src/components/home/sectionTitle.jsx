import React from 'react'

function SectionTitle({ title }) {
  return (
    <div className='flex flex-wrap'>
        <div className='text-gray-600 border-b-2 border-red-600 font-semibold'> {title} </div>
    </div>
  )
}

export default SectionTitle