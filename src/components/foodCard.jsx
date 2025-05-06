import React from 'react'
import { BASE_URL } from '../services/apiService'

function FoodCard({
    name,
    image,
    category,
    price,
    restaurant
}) {
    return (
        <div className='flex-shrink-0 shadow-lg w-[15rem] bg-white rounded-lg overflow-hidden relative'>
            <img className='w-full object-cover h-[10rem]' src={BASE_URL + image} />
            <p className='px-2 py-1 font-semibold'>{name}</p>
            <div className='flex justify-between px-2 pb-1'>
                <p className='text-sm'>{category}</p>
                <p className='text-sm text-red-600'>Rs {price}/-</p>
            </div>
            <p className='px-2 pb-2 text-sm text-green-600'>Restaurant: {restaurant}</p>
        </div>
    )
}

export default FoodCard