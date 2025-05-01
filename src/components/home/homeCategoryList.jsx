import React from 'react'
import SectionTitle from './sectionTitle'
import { BASE_URL } from '../../services/apiService'
import { Link } from 'react-router-dom'

function HomeCategoryList({ datas }) {
  return (
    <div className='w-[70%] mx-auto mt-10'>
      <SectionTitle title={'Categories'} />

      <div className="flex gap-10 mt-5">

        {
          datas.map((item, index) => {
            return (
              <Link to={`/category/${item.id}`} key={index} className="flex flex-col justify-center items-center">
                <img className="hover:border-red-600 border-10 border-white shadow-2xl w-[6rem] h-[6rem] rounded-full object-cover transition-all duration-800" src={BASE_URL + item.image} alt="" />
                <p className="hover:text-red-600 text-sm text-gray-600 transition duration-500 cursor-pointer font-medium">{item.name}</p>
              </Link>
            )
          })
        }

      </div>
    </div>
  )
}

export default HomeCategoryList