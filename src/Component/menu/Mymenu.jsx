import React, { useState,useEffect,useContext } from 'react';
import dosa from '../../img/images/chhola.jpg';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ApiContextData from '../../context';

const Mymenu = () => {
  const { loading, cocktails } = useContext(ApiContextData)
 if (loading){
  return (
    <h1>Loading ...</h1>
  )
 }
  return (
  
    <>
      <div className='grid grid-cols-6 gap-10 my-4 mx-4'>
  
      {/* Fetched Items */}
      {cocktails.map((element, index)=>{
        
        return (
          <div 
          className='cursor-pointer lg:col-span-2 sm:col-span-3 col-span-6 mx-4 md:mx-0 p-2 border-4 border-solid border-gray-500 rounded-xl bg-orange-100'
          key={index}
          >
                
              <img src={element.image} alt='img' className='rounded-xl  h-[40vh] w-[100%]'/>
              <div className='text-xl font-bold text-center'>
               {element.name}
              </div>
              <div className='flex my-3'>
                <div>
                <div><span className='font-bold'>Type:</span> {element.info} </div>  
                <div><span className='font-bold'>Glass Type:</span> {element.glass}</div>
                </div>
              <div className='flex text-gray-700 text-sm ml-auto mr-2'>
                
              <span>Price</span>
                  <span>₹150 </span>
              </div>
              
              </div>
              
              <div className='text-center mb-4 mt-2'>

                <NavLink to={`/orderdetail/${element.id}`} className='border border-solid border-blue-500 bg-transparent text-blue-700 font-semibold hover:bg-blue-500 hover:border-transparent hover:text-white py-2 px-4 rounded'>Show Details</NavLink>
              </div>
            
          </div>
          )
})}
{/* Fetched Items End */}
</div>
</>    
)
}


export default Mymenu;
