import React, { useEffect, useState } from 'react'
import Banner from '../components/home/banner'
import HomeCategoryList from '../components/home/homeCategoryList'
import HomeRestaurantList from '../components/home/homeRestaurantList'
import MostPopular from '../components/home/mostPopular'
import Loading from '../components/loading'
import { getRequest } from '../services/apiService'

function Home() {

  const [loading, setLoading] = useState(true)
  
  const [banners, setBanners] = useState([])
  const [categories, setCategories] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [mostPopular, setMostPopular] = useState([])

  const fetchData = async () => {
    const data = await getRequest('home')
    if (!data) {
      console.log('Error fetching data')
      return
    }
    setLoading(false)
    setBanners(data.banners)
    setCategories(data.food_categories)
    setRestaurants(data.restaurants)
    setMostPopular(data.popular_items)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    loading ? <Loading /> :
    <div className='py-10'>

      <Banner datas={banners} />

      <HomeCategoryList datas={categories} />

      <HomeRestaurantList datas={restaurants} />

      <MostPopular datas={mostPopular} />

    </div>
  )
}

export default Home