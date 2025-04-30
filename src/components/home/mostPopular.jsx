import React from 'react'
import SectionTitle from './sectionTitle'
import { BASE_URL } from '../../services/apiService'

function MostPopular({ datas }) {


    return (
        <div className="w-[70%] mx-auto mt-10">
            <SectionTitle title={'Popular Items'} />

            <div className='mt-5 w-full overflow-x-auto flex gap-5' style={{
                '::-webkit-scrollbar': {
                    display: 'none',
                },
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
            }}>

                {
                    datas.map((item, index) => {
                        return (
                            <div key={index} className='relative flex-shrink-0 w-[25rem] h-[15rem]'>
                                <img className='h-full w-full object-cover' src={BASE_URL + item.image} alt="" />
                                <div style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))' }} className='absolute h-full w-full bottom-0'></div>
                                <div className='absolute bottom-0 left-0 px-3 py-2 text-white w-full'>
                                    <p className='text-glow-hover transition-all duration-700 text-lg font-semibold'>{item.name}</p>
                                    <div className='flex justify-between w-full'>
                                        <p className='text-sm'>{item.category.name}</p>
                                        <p>Rs {item.price}/-</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default MostPopular