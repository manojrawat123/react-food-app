import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import dosa from "../../img/images/loding.png"
import ApiContextData from '../../context';

const MyOrderDetail = () => {

  const { id } = useParams()
  const { loading, cocktails } = useContext(ApiContextData);

  const [myId, setMyId] = useState(id)
  const data = cocktails?.filter((element)=> element.id === myId);
  const [item, setItem] = useState(data)
  
    return (
        <div className='grid grid-cols-3 my-4 mx-8' key={item[0]?.id}>
        <div className='sm:col-span-1 gap-5 col-span-3 '>
          <img src={cocktails?.filter((element)=> element.id === myId)[0]?.image?cocktails?.filter((element)=> element.id === myId)[0].image: dosa} alt="" className='object-contain' />
        </div>
        <div className='sm:col-span-2 col-span-3 shadow-2xl p-4 rounded-xl sm:ml-4'>
          <h1 className='text-xl font-bold underline '>
           <span className='font-bold'>Drink Name:</span> {cocktails?.filter((element)=> element.id === myId)[0]?.name? cocktails?.filter((element)=> element.id === myId)[0]?.name :"Loading wait for second ..."}
          </h1>
          <div><span className='font-bold'>Type of drink: </span>{cocktails?.filter((element)=> element.id === myId)[0]?.info}</div>
          <div><span className='font-bold'>Type of Glass: </span>{cocktails?.filter((element)=> element.id === myId)[0]?.glass}</div>

          <div>
            {cocktails?.filter((element)=> element.id === myId)[0]?.instruction?.map((element, index)=>{
              if (element != null){
                return (
                  <li key={index}>
                    {element}
                  </li>
                )
              }
              else{
                return ""
              }
              
            })}

            <div className='mt-3'>
              <h1 className='text-xl font-semibold'>Ingridends</h1>
                {
            cocktails?.filter((element)=> element.id === myId)[0]?.ingrident?.map((element, index)=>{
              

              if (element !=null){
               
                return (

                  <div key={index} className='mt-3'>
                     
                    <span>--</span>{ element}
                  </div>
                  )
                  
              }
              else{
                return ""
              }
            })
          }
            </div>

         </div>
        <button  className='border border-solid border-blue-500 bg-transparent text-blue-700 font-semibold hover:bg-blue-500 hover:border-transparent hover:text-white sm:py-2 sm:px-4 sm:text-sm py-1 px-2 rounded mr-2'>Buy Now</button>
        <button  className='border border-solid border-blue-500 bg-transparent text-blue-700 font-semibold hover:bg-blue-500 hover:border-transparent hover:text-white sm:py-2 sm:px-4 sm:text-sm py-1 px-2 rounded ml-2'>Add To Cart</button>
        </div>
      </div>
    )
  }

  

  


export default MyOrderDetail
