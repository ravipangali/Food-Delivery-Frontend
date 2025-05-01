import React, { useEffect, useState } from 'react'
import { BASE_URL, getRequest } from '../services/apiService'
import Loading from '../components/loading'
import { Link } from 'react-router-dom'

function Category() {

  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])

  const fetchData = async () => {
    const data = await getRequest('home')
    if (!data) {
      console.log('Error fetching data')
      return
    }
    setLoading(false)
    setCategories(data.food_categories)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    loading ? <Loading /> : <div>

      <div className='relative w-full h-[15rem] flex'>
        <img className='w-full h-[15rem] object-cover' src="https://png.pngtree.com/thumb_back/fh260/background/20240720/pngtree-taking-slice-picture-of-prepared-delicious-pizza-with-sausage-rings-and-image_15902897.jpg" alt="" />
        <div style={{ background: 'rgba(0,0,0,.5)' }} className='w-full text-white font-bold flex justify-center items-center text-4xl h-full absolute'>
          Categories
        </div>
      </div>

      <div className='w-[70%] flex flex-col mx-auto mt-10'>
        {
          categories.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-5 border-b-2 border-red-600 py-5'>
                <Link to={`/category/${item.id}`} className='flex-shrink-0'>
                  <img className='cursor-pointer rounded-full border-8 border-white shadow-xl hover:border-red-600 transition duration-500 hover:shadow-red-300 object-cover h-[5rem] w-[5rem]' src={BASE_URL + item.image} alt="" />
                </Link>
                <Link to={`/category/${item.id}`} className='cursor-pointer hover:text-red-600 transition duration-500 hover:font-bold hover:text-lg font-semibold'>{item.name}</Link>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Category