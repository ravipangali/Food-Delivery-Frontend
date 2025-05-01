import React from 'react'
import SectionTitle from './sectionTitle'
import FoodCard from '../foodCard'

function HomeFoodList({ datas }) {
    return (
        <div>
            {
                datas.map((category, categoryIndex) => {
                    return (
                        <div key={categoryIndex} className="w-[70%] mx-auto mt-10">
                            <SectionTitle title={category.name} />

                            <div className='mt-5 w-full overflow-x-auto flex gap-5' style={{
                                '::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                scrollbarWidth: 'none', /* Firefox */
                                msOverflowStyle: 'none', /* IE and Edge */
                            }}>

                                {
                                    category.foods.map((item, index) => <FoodCard
                                        key={index}
                                        name={item.name}
                                        category={item.category.name}
                                        image={item.image}
                                        price={item.price}
                                    />
                                    )
                                }


                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomeFoodList