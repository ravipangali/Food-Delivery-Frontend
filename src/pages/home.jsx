import React from 'react'
import Banner from '../components/home/banner'
import HomeCategoryList from '../components/home/homeCategoryList'
import HomeRestaurantList from '../components/home/homeRestaurantList'
import MostPopular from '../components/home/mostPopular'

function Home() {


  return (
    <div className='py-10'>

      <Banner />

      <HomeCategoryList />

      <HomeRestaurantList />

      <MostPopular />

    </div>
  )
}

export default Home