import React from 'react'
import { useContext } from 'react'
import ApiContextData from '../../context'

const MyAbout = () => {
  return (
    <>
     <div className="bg-gray-100 p-10 grid grid-cols-2 gap-4">
        <div className='p-4 rounded-xl bg-gradient-to-r from-green-200 via-purple-300 to-pink-200 sm:col-span-1 col-span-2'>
      <h1 className="text-2xl font-bold  text-center">About Us</h1>
      <p className="text-gray-700 mt-2 ">
        Welcome to our company! We are a team of passionate individuals dedicated to providing top-quality products and services to our customers.
      </p>
      </div>
      <div className="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 rounded-xl p-4 sm:col-span-1 col-span-2">
        <h2 className="text-lg font-bold text-center">Our Mission</h2>
        <p className=" mt-2">
          We sdivive to deliver innovative solutions that meet the needs of our clients and exceed their expectations. Our mission is to make a positive impact on their business and help them succeed.
        </p>
      </div>
    </div>
    <div className="mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white p-4 rounded-xl mx-8">
        <h2 className="text-lg font-bold text-center">Our Values</h2>
        <div className='w-[100%]'>
            <div className='w-[60%] mx-auto'>
          <div className=''>
            <span className=' font-semibold'>Satisfaction:</span>
            <span>  Putting our customers' needs first and ensuring their satisfaction.</span>
          </div>
          <div className=''>
            <span className='font-semibold'>Quality:</span>
            <span>  Delivering high-quality products and services that meet the highest standards.</span>
          </div>

          <div className=''>
            <span className='font-semibold'>Integrity:  </span>
          <span>Acting with honesty, divansparency, and ethical conduct in everything we do.</span>
       
          </div>
          <div className=''>
            <span className='font-semibold'>Innovation: </span>
          <span> Embracing creativity and staying at the forefront of technology to drive innovation.</span>
   
          </div>
          <div className=''>
            <span className=' font-semibold'>Collaboration: </span>
          <span> Fostering a collaborative environment and working together as a team.</span>
   
          </div>
          </div>
        </div>
       
     
      </div>
     
    </>
  )
}

export default MyAbout
