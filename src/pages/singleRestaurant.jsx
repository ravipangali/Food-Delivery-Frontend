import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, getRequest } from '../services/apiService'
import Loading from '../components/Loading'
import CategoriesFoodList from '../components/categoriesFoodList'

function SingleRestaurant() {

    const id = useParams().id

    const [loading, setLoading] = useState(true)
    const [restaurant, setRestaurant] = useState({})
    const [categories, setCategories] = useState([])

    const fetchData = async () => {
        const data = await getRequest(`restaurant/${id}`)
        if (!data) {
            console.log('Error fetching data')
            return
        }
        setRestaurant(data.restaurant)
        setCategories(data.categories)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        loading ? <Loading /> :
            <div>
                <div className='relative w-full justify-center items-center h-[15rem] flex'>
                    <img className='w-full h-[15rem] object-cover' src={BASE_URL + restaurant.logo} alt="" />
                    <div style={{ background: 'rgba(0,0,0,.5)' }} className='w-full text-white font-bold flex justify-center items-center text-4xl h-full absolute'>
                        {restaurant.name}
                    </div>
                </div>

                <CategoriesFoodList datas={categories} />
            </div>
    )
}

export default SingleRestaurant