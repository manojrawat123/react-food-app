import React, {useState} from 'react';
import logo from '../img/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Autocomplete, TextField } from '@mui/material';
import MobileDrop from './MobileDrop';



const options = ["Chicken", "Sahi Korma", "Cheez Pizza", "Dal Makhni", "Samosa"]


const Topbar = () => {
  const [display, setdisplay] = useState("hidden my-[3rem]");
    const handleClick = ()=>{
        if (display == "hidden my-[3rem]"){
            setdisplay("block my-[3rem] text-center shadow-2xl")
        }
        else{
            setdisplay("hidden my-[3rem]")
        }
    }
  return (
    <>
    <div className='text-white w-[100%] flex justify-center items-center col-span-12 h-[4rem] bg-gradient-to-r from-blue-700 via-pink-300 to-red-700 pr-8'>
       <div className='mr-auto ml-4'> <img src={logo} className='h-[2rem] w-[2rem] rounded-[50%]'/></div>
       <div className='relative sm:mr-0 mr-auto'>
       <Autocomplete
       size='small'
      options={options}
      renderInput={(params) => (
        <TextField
        sx={{
          width: {
            xs: '65vw',
            sm:'40vw',
            md: '45vw',
        },
}}
          {...params}
          label=""
          placeholder='Search Your Meal'
          
          InputProps={{ ...params.InputProps,endAdornment: null ,style: {
            fontWeight: 'bold',
            color: 'white',
            fontSize:"18px"
          },}}
        />
      )}
    />       
        {/* <input 
        type='text'
        className='border border-gray-500 border-solid outline-1 outline-blue-700 w-[40vw] sm:w-[40vw] h-[2rem] rounded-xl pl-4' /> */}
        <button 
        type="button"
        onClick={()=>{console.log("button clicked")}}
        className='absolute top-1 right-3 border-l border-solid border-gray-500'>{/*<NavLink to={'/search'}>*/} <SearchIcon></SearchIcon>{/*</NavLink>*/}</button>
       </div>
       {/* Laptop Menu */}
       <div className='hidden space-x-4 md:flex ml-auto text-[1rem] font-semibold mr-3 '>
       <div className=''>
        <span>
          <NavLink to={"/"}>Home</NavLink>
          </span>
       </div>
       <div className='rounded-[50%]'>
        <NavLink to={'/menu'}>Menu</NavLink>
        </div>
       <div className=' sm:block hidden'>
        <NavLink to={"/contact"}>
        Contact
        </NavLink>
          
        </div>
       <div className=''>
        <NavLink to={"/about"}>About</NavLink>
       </div>
       <div className=''>
        <NavLink to={"/login"}><AccountCircleIcon></AccountCircleIcon></NavLink>
       </div>
       </div>
       {/* Laptop Menu End */}
       {/* Mobile Menu Start */}
       <div className='ml-auto md:hidden block '>
        <button type='button' onClick={handleClick}>
        <DensityMediumIcon></DensityMediumIcon>
        </button>
       </div>
       {/* Mobile Menu End */}
    </div>
    <div className={`${display}`+ "absolute z-10"}>
    <MobileDrop />
    </div>
    </>
  )
}

export default Topbar
