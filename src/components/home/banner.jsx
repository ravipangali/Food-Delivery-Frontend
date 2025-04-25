import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Banner() {
    return (
        <div className='w-[70%] h-[20rem] mx-auto'>
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
                <div className='w-[100%] h-[20rem] flex justify-center items-center'>
                    <img src="https://img.freepik.com/free-vector/flat-design-asian-food-facebook-template_23-2150057871.jpg?semt=ais_hybrid&w=740" />
                </div>
                <div className='w-[100%] h-[20rem] flex justify-center items-center'>
                    <img src="https://i.ytimg.com/vi/vz2zGfaq1ec/maxresdefault.jpg" />
                </div>
                <div className='w-[100%] h-[20rem] flex justify-center items-center'>
                    <img src="https://files.selar.co/product-images/2024/products/richidmultimedia/food-banner-design-selar.co-66662ea9afe5b.jpg" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner