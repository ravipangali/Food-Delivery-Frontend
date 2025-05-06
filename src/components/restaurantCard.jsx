import React from 'react'
import { BASE_URL } from '../services/apiService'
import { Link } from 'react-router-dom'

function RestaurantCard({
    id,
    logo,
    name
}) {
    return (
        <Link to={`/restaurant/${id}`} className='relative w-[15rem] h-[9rem] rounded-lg overflow-hidden'>
            <img className='w-[15rem] h-[9rem] rounded-lg object-cover' src={BASE_URL + logo} alt="" />
            <div style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))' }} className='absolute h-[9rem] w-[15rem] bottom-0'></div>
            <p className='text-glow font-semibold absolute bottom-2 left-2  text-white'>{name}</p>
        </Link>
    )
}

export default RestaurantCard