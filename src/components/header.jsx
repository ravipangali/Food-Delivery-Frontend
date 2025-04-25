import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='border-b-2 border-red-600 bg-red-700'>
      <header className='flex w-[70%] mx-auto py-4 justify-between items-center'>
        <div className="text-white font-bold">Food <span className='text-white'>Delivery</span></div>

        <nav>
          <ul className='flex gap-5 text-sm font-medium text-white'>
            <li className=' cursor-pointer'> <Link to="/"> Home </Link></li>
            <li className=' cursor-pointer'> <Link to="/categories"> Categories </Link></li>
            <li className=' cursor-pointer'> <Link to="/restaurants"> Restaurants </Link></li>
            <li className=' cursor-pointer'> <Link to="/order"> Orders </Link></li>
            <li className=' cursor-pointer'> <Link to="/profile"> Profile </Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
