import React from 'react';
import { Button } from '@mui/material';


import './home.css'
import { NavLink } from 'react-router-dom';
const MyHome = () => {
  return (
    <>
    <div className='bg-[#8c959d] h-[70vh]'>
    <div id="container">
    <div id="banner">    
       
    </div>
    </div>

    
    <div className=' text-center top-[45%] left-[50%] transform' id='bg-text'>
         <h2 className='xl:text-7xl md:text-6xl text-5xl font-[900] '>Food Website</h2>
         <h3 className='text-2xl font-semibold'>Best Food in India</h3>
         <NavLink to={"/menu"}><button className='bg-gray-900 py-2 px-6 last: text-white font-semibold hover:bg-black rounded-xl xl:text-xl mt-4'>
          ORDER NOW
         </button></NavLink>
        </div>

        </div>
    </>
  )
}

export default MyHome
