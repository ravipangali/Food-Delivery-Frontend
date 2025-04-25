import React from 'react'
import Banner from '../components/home/banner'
import HomeCategoryList from '../components/home/homeCategoryList'
import HomeRestaurantList from '../components/home/homeRestaurantList'

function Home() {
  return (
    <div className='py-10'>

      <Banner />

      <HomeCategoryList />

      <HomeRestaurantList />

    </div>
  )
}

export default Home