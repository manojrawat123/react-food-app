import React, { useState,useEffect,useContext } from 'react'
import dosa from '../../img/images/chhola.jpg'
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Mymenu = () => {
  const [my_value, setMyValue] = useState('')
  const [mySearch, setMySearch] = useState("pasta")
  const [track_error , setTrackError] = useState(null)
  useEffect(()=>{
    const fetch_api = ()=>{
      const options = {
        method: "GET",
        url: "https://api.spoonacular.com/recipes/complexSearch",
        params: {
          query: `${mySearch}`,
          apiKey: '43d53e9e0e2d44ada12b3ddb05fbcd7a'
        },
        headers: {
          'Content-Type': 'application/json',
        'Accept': 'application/json',
        }
      }
          
        axios.request(options).then((value)=>{
          console.log(value.data.results)
          setMyValue(value.data.results)
          setTrackError("ok")
        }).catch(error => {
          setTrackError("error")
          console.error(error);
        });
        
      }
      fetch_api()  
  }, [])

  
if (track_error === 'ok'){
  return (
  
    <>
      <div className='grid grid-cols-6 gap-10 my-4 mx-4'>
  
      {/* Fetched Items */}
      {my_value.map((element, index)=>{
        
        return (
          <div 
              className='cursor-pointer lg:col-span-2 sm:col-span-3 col-span-6 mx-4 md:mx-0 p-2 border-4 border-solid border-gray-500 rounded-xl bg-orange-100'
              key={index}
              >
              <img src={element.image} alt='img' className='rounded-xl  h-[40vh] w-[95%]'/>
              <div className='text-xl font-bold text-center'>
               {element.title}
              </div>
              <div className='flex my-3'>
                <div>Rating: 4.5  <StarIcon color='primary' style={{fontSize: '16px'}} ></StarIcon><StarIcon color='primary' style={{fontSize: '16px'}} ></StarIcon><StarIcon color='primary' style={{fontSize: '16px'}} ></StarIcon><StarIcon color='primary' style={{fontSize: '16px'}} ></StarIcon><StarIcon color='primary' style={{fontSize: '16px'}} ></StarIcon> </div>  
              <div className='flex text-gray-700 text-sm ml-auto mr-2'>
                
              <span>Price</span>
                  <span>₹150 </span>
              </div>
              </div>
              <div className='text-center mb-4'>
                <NavLink to={`/orderdetail/${element.id}`} className='border border-solid border-blue-500 bg-transparent text-blue-700 font-semibold hover:bg-blue-500 hover:border-transparent hover:text-white py-2 px-4 rounded'>Show Details</NavLink>
              </div>
            
          </div>)
})}
{/* Fetched Items End */}
</div>
</>    
)
}

else if(track_error=== "error"){
    return (
    <>
    <h1 className='text-xl font-semibold text-center pt-4'>You have no Permission to acesses this API</h1>
    <h2 className="text-center pb-4">(Plese Check Your Internet Cabel Connection And Try Again)</h2>
{/*  */}
    </>
    )
}

else if(track_error === null){
  return (
    <>
    <h2 className='text-2xl text-semibold'>Plese wait for a second Loading ...</h2>
    </>
  )
}

}


export default Mymenu
