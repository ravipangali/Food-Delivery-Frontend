import React from 'react'
import SectionTitle from './sectionTitle'

function HomeCategoryList() {
  return (
    <div className='w-[70%] mx-auto mt-10'>
        <SectionTitle title={'Categories'} />

        <div className="flex gap-10 mt-5">

          <div className="flex flex-col justify-center items-center">
            <img className="hover:border-red-600 border-10 border-white shadow-2xl w-[6rem] h-[6rem] rounded-full object-cover transition-all duration-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s" alt="" />
            <p className="hover:text-red-600 text-sm text-gray-600 transition duration-500 cursor-pointer font-medium">Burger</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="hover:border-red-600 border-10 border-white shadow-2xl w-[6rem] h-[6rem] rounded-full object-cover transition-all duration-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s" alt="" />
            <p className="hover:text-red-600 text-sm text-gray-600 transition duration-500 cursor-pointer font-medium">Pizza</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="hover:border-red-600 border-10 border-white shadow-2xl w-[6rem] h-[6rem] rounded-full object-cover transition-all duration-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStG0YKX6PfF9pcgMiK3LfUXkTRXdIRfLl5LQ&s" alt="" />
            <p className="hover:text-red-600 text-sm text-gray-600 transition duration-500 cursor-pointer font-medium">Momo</p>
          </div>

        </div>
      </div>
  )
}

export default HomeCategoryList