import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/loading'
import { BASE_URL, getRequest } from '../services/apiService'
import FoodCard from '../components/foodCard'

function SingleCategory() {

    const id = useParams().id

    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState({})

    const fetchData = async () => {
        const data = await getRequest(`category/${id}`)
        if (!data) {
            console.log('Error fetching data')
            return
        }
        setLoading(false)
        setCategory(data.category)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        loading ? <Loading /> :
            <div>

                <div className='relative w-full justify-center items-center h-[15rem] flex'>
                    <img className='w-full h-[15rem] object-cover' src={BASE_URL + category.image} alt="" />
                    <div style={{ background: 'rgba(0,0,0,.5)' }} className='w-full text-white font-bold flex justify-center items-center text-4xl h-full absolute'>
                        {category.name}
                    </div>
                </div>

                <div className='w-[70%] flex flex-wrap gap-8 mx-auto mt-10'>
                    {
                        category.foods.map((item, index) => <FoodCard
                            key={index}
                            name={item.name}
                            image={item.image}
                            category={item.category.name}
                            price={item.price}
                        />)
                    }
                </div>

            </div>
    )
}

export default SingleCategory