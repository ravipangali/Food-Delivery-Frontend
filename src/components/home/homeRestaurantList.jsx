import React from 'react'
import SectionTitle from './sectionTitle'

function HomeRestaurantList() {
    return (
        <div className="w-[70%] mx-auto mt-10">
            <SectionTitle title={'Restaurants'} />

            <div className='mt-5 flex gap-5'>
                <div className='relative w-[15rem] h-[9rem] rounded-lg overflow-hidden'>
                    <img className='w-[15rem] h-[9rem] rounded-lg object-cover' src="https://reciteme.com/au/wp-content/uploads/sites/3/2024/06/KFC-thumbnail-1024x576-1.jpg" alt="" />
                    <div style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))' }} className='absolute h-[9rem] w-[15rem] bottom-0'></div>
                    <p className='text-glow font-semibold absolute bottom-2 left-2  text-white'>KFC</p>
                </div>

                <div className='relative w-[15rem] h-[9rem] rounded-lg overflow-hidden'>
                    <img className='w-[15rem] h-[9rem] rounded-lg object-cover' src="https://media.dominos.com/content/images/logos_jpg_thumb.png" alt="" />
                    <div style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))' }} className='absolute h-[9rem] w-[15rem] bottom-0'></div>
                    <p className='text-glow font-semibold absolute bottom-2 left-2  text-white'>Dommino's</p>
                </div>

                <div className='relative w-[15rem] h-[9rem] rounded-lg overflow-hidden'>
                    <img className='w-[15rem] h-[9rem] rounded-lg object-cover' src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700,h_400/https://assets.designhill.com/design-blog/wp-content/uploads/2015/02/Typeface.jpg" alt="" />
                    <div style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))' }} className='absolute h-[9rem] w-[15rem] bottom-0'></div>
                    <p className='text-glow font-semibold absolute bottom-2 left-2  text-white'>Pizza Hut</p>
                </div>
            </div>
        </div>
    )
}

export default HomeRestaurantList