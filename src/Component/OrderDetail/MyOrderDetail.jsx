import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import dosa from "../../img/images/loding.png"

const MyOrderDetail = () => {
  const { id } = useParams()
  const [display, setdisplay] = useState()
  const [arr, setArr] = useState([])
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  useEffect(() => {


    const fetch_api = () => {
      const options = {
        method: "GET",
        url: "https://api.spoonacular.com/recipes/complexSearch",
        params: {
          query: `pasta`,
          apiKey: '43d53e9e0e2d44ada12b3ddb05fbcd7a',
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
      axios.request(options).then((value) => {
        console.log(value.data.results)
        setArr(value.data.results)
        const findElementById = (id= id) => {
          return value.data.results.find(item => item.id === Number(id));
        };
        const element = findElementById(id); 
        setImage(element.image)
        setTitle(element.title)
      }).catch(error => {
        console.error(error);
      });
    }
    fetch_api()
  }, [])
  if (setdisplay) {
    return (
      <div className='grid grid-cols-3 my-4 mx-8'>
        <div className='sm:col-span-1 gap-5 col-span-3'>
          <img src={image?image: dosa} alt="" className='w-[100%] h-[100%]' />
        </div>
        <div className='sm:col-span-2 col-span-3 shadow-2xl p-4 rounded-xl sm:ml-4'>
          <h1 className='text-xl font-bold underline '>
            {title? title :"Loading wait for second ..."}
          </h1>
          <p>This is a classic and widely loved dosa variety. It is made with a fermented batter of rice and lentils, filled with a spiced potato filling. Masala dosa is usually served with coconut chutney and sambar (a lentil-based vegetable stew).</p>
        <button  className='border border-solid border-blue-500 bg-transparent text-blue-700 font-semibold hover:bg-blue-500 hover:border-transparent hover:text-white sm:py-2 sm:px-4 sm:text-sm py-1 px-2 rounded mr-2'>Buy Now</button>
        <button  className='border border-solid border-blue-500 bg-transparent text-blue-700 font-semibold hover:bg-blue-500 hover:border-transparent hover:text-white sm:py-2 sm:px-4 sm:text-sm py-1 px-2 rounded ml-2'>Add To Cart</button>
        </div>
      </div>
    )
  }

  else {
    return (
      <h1>No Data Of give Id</h1>
    )

  }
}

export default MyOrderDetail
