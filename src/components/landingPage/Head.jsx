import React from 'react'
import Header from '../common/Header'
export default function () {
  return (
    <>
    <div className="bg-bg2 bg-cover bg-center h-[500px] items-center" >
        <div>
        <Header/>
        </div>
      <div className='flex justify-center mt-20 text-2xl font-Dance'>
        <div>
        <h1>Discover your style and express yourself with our stunning collection.</h1>
        <button className='h-11 ml-[300px] mt-5 rounded-2xl bg-red-400 w-28'>
            Shop!
        </button>
        </div>
      </div>
    </div>
    </>


  )
}
