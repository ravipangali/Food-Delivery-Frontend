import React from 'react'
import SectionTitle from './sectionTitle'
import { BASE_URL } from '../../services/apiService'
import RestaurantCard from '../restaurantCard'

function HomeRestaurantList({ datas }) {
    return (
        <div className="w-[70%] mx-auto mt-10">
            <SectionTitle title={'Restaurants'} />

            <div className='mt-5 flex gap-5'>
                {
                    datas.map((item, index) => <RestaurantCard key={index} id={item.id} name={item.name} logo={item.logo} />)
                }
            </div>
        </div>
    )
}

export default HomeRestaurantList