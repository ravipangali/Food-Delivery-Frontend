import React, { useEffect, useState } from 'react'
import { getRequest } from '../services/apiService'
import Loading from '../components/loading'
import RestaurantCard from '../components/restaurantCard'

function Restaurant() {

  const [loading, setLoading] = useState(true)
  const [restaurants, setRestaurants] = useState([])

  const fetchData = async () => {
    const data = await getRequest('home')
    if (!data) {
      console.log('Error fetching data')
      return
    }
    setLoading(false)
    setRestaurants(data.restaurants)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    loading ? <Loading /> : <div>

      <div className='relative w-full h-[15rem] flex'>
        <img className='w-full h-[15rem] object-cover' src="https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/03/modern-cafe-house.jpg" alt="" />
        <div style={{ background: 'rgba(0,0,0,.5)' }} className='w-full text-white font-bold flex justify-center items-center text-4xl h-full absolute'>
          Restaurants
        </div>
      </div>

      <div className='w-[70%] flex flex-wrap justify-center gap-5 mx-auto mt-10'>

        {
          restaurants.map((item, index) => <RestaurantCard key={index} id={item.id} logo={item.logo} name={item.name} />)
        }

      </div>

    </div>
  )
}

export default Restaurant