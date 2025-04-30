import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BASE_URL } from '../../services/apiService';

function Banner({ datas }) {
    return (
        <div className='w-[70%] h-[20rem] mx-auto'>
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
                {
                    datas.map((item, index) => {
                        return (
                            <div key={index} className='w-[100%] h-[20rem] flex justify-center items-center'>
                                <img src={BASE_URL+item.image} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Banner