import React from 'react'
import SectionTitle from './sectionTitle'

function MostPopular() {
    return (
        <div className="w-[70%] mx-auto mt-10">
            <SectionTitle title={'Popular Items'} />

            <div className='mt-5 flex gap-5'>

                <div className='relative flex w-[50%] h-[15rem]'>
                    <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s" alt="" />
                    <div style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))' }} className='absolute h-full w-full bottom-0'></div>
                    <div className='absolute bottom-0 left-0 px-3 py-2 text-white w-full'>
                        <p className='text-glow-hover transition-all duration-700 text-lg font-semibold'>Chicken Burger</p>
                        <div className='flex justify-between w-full'>
                            <p className='text-sm'>Burger</p>
                            <p>Rs 190/-</p>
                        </div>
                    </div>
                </div>

                <div className='relative flex w-[50%] h-[15rem]'>
                    <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s" alt="" />
                    <div style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))' }} className='absolute h-full w-full bottom-0'></div>
                    <div className='absolute bottom-0 left-0 px-3 py-2 text-white w-full'>
                        <p className='text-glow-hover transition-all duration-700 text-lg font-semibold'>Chicken Pizza</p>
                        <div className='flex justify-between w-full'>
                            <p className='text-sm'>Pizza</p>
                            <p>Rs 590/-</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MostPopular