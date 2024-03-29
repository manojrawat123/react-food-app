import React, {useContext, useEffect, useState} from 'react';
import logo from '../img/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Autocomplete, TextField } from '@mui/material';
import MobileDrop from './MobileDrop';
import CloseIcon from '@mui/icons-material/Close';
import ApiContextData from '../context';





const Topbar = () => {
  const {cocktails, setCocktails,itemSearch, setItemSearch } = useContext(ApiContextData);
  const navigate = useNavigate()
  const location = useLocation()
  const options = cocktails.map((element)=>{return element.name})
  const [display, setdisplay] = useState("h-[0rem]");

  const [symbol, setSymbol] = useState(<DensityMediumIcon className='animate-bounce duration-2000 ease-in-out infinite'/>)
  
    const handleClick = ()=>{
        if (display == "h-[0rem]"){
            setdisplay("h-[14rem]")
            setSymbol(<CloseIcon />)
        }
        else{
            setdisplay("h-[0rem]")
            setSymbol(<DensityMediumIcon className='animate-bounce duration-2000 ease-in-out infinite'/>)
        }
    }
  return (
    <>
    <div className='text-white w-[100%] flex justify-center items-center col-span-12 h-[4rem] bg-gradient-to-r from-blue-700 via-pink-300 to-red-700 pr-8'>
       <div className='mr-auto ml-4'> <img src={logo} className='h-[2rem] w-[2rem] rounded-[50%]'/></div>
       <div className='relative sm:mr-0 mr-auto'>

           
        
        <input 
        type='text'
        placeholder='Search your drink here'
        value={itemSearch}
        onChange={(e)=>{
          if(location.pathname !== "/menu"){
            navigate("/menu")
          }
          setItemSearch(e.target.value)

        }}
        className='border border-gray-500 border-solid outline-1 text-black outline-blue-700 w-[50vw] sm:w-[40vw] h-[3rem] rounded-xl pl-4' />
        <button 
        type="button"
        onClick={()=>{console.log("button clicked")}}
        className='absolute right-2 border-l border-solid border-gray-500 text-black top-3'>{/*<NavLink to={'/search'}>*/} <SearchIcon></SearchIcon>{/*</NavLink>*/}</button>
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
        {symbol}
        </button>
       </div>
       {/* Mobile Menu End */}
    </div>
    <div className={`${display}`+ " absolute z-10  text-center shadow-2xl overflow-hidden bg-white px-12 right-0 rounded-xl transition-height duration-500 "}>
          {/* Mobile DropDown Menu */}
          <div className="text-center">
            <NavLink to="/" onClick={()=>{setdisplay("h-[0rem]")
                setSymbol(<DensityMediumIcon />)}}>
                <div className=" underline font-bold my-4">Home </div>
            </NavLink>
            <NavLink to="/menu" onClick={()=>{setdisplay("h-[0rem]")
            setSymbol(<DensityMediumIcon />)}}> <div className=" underline  font-bold my-4">  Menu </div></NavLink>
            <NavLink to="/contact" onClick={()=>{setdisplay("h-[0rem]")
            setSymbol(<DensityMediumIcon />)}}>  <div className=" underline font-bold my-4">Contact  </div></NavLink>
            <NavLink to="/about" onClick={()=>{setdisplay("h-[0rem]")
            setSymbol(<DensityMediumIcon />)}}>  <div className=" underline font-bold my-4">   About  </div></NavLink>
            <NavLink to="/login" onClick={()=>{setdisplay("h-[0rem]")
            setSymbol(<DensityMediumIcon />)}}>  <div className=" underline font-bold my-4"> Login & Signup</div></NavLink>
            <br/> 
            <br/>
      {/* <div className="mr-8 relative">
        <input type="text" className="border-2 border-solid border-gray-700 pl-2 w-[20rem] h-[2rem] rounded" placeholder="Search"/> 
            </div>
             */}
          </div>
          {/* Mobile DropDown Menu Close */}
    </div>
    </>
  )
}

export default Topbar
