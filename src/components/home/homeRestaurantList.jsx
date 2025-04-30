import React from 'react'
import SectionTitle from './sectionTitle'
import { BASE_URL } from '../../services/apiService'

function HomeRestaurantList({ datas }) {
    return (
        <div className="w-[70%] mx-auto mt-10">
            <SectionTitle title={'Restaurants'} />

            <div className='mt-5 flex gap-5'>
                {
                    datas.map((item, index) => {
                        return (
                            <div key={index} className='relative w-[15rem] h-[9rem] rounded-lg overflow-hidden'>
                                <img className='w-[15rem] h-[9rem] rounded-lg object-cover' src={BASE_URL+item.logo} alt="" />
                                <div style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))' }} className='absolute h-[9rem] w-[15rem] bottom-0'></div>
                                <p className='text-glow font-semibold absolute bottom-2 left-2  text-white'>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeRestaurantList