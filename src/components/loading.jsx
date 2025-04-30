import React from 'react'

function Loading() {
    return (
        <div className='w-full h-[78vh] flex justify-center items-center'>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center bg-black rounded-full shadow-lg'>
            <span className="loader"></span>
            </div>
        </div>
    )
}

export default Loading