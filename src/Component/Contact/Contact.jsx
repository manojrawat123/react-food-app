import React from 'react'

const MyContact = () => {
  return (
    <div className='grid grid-cols-12 ml-3 my-8 gap-4 mx-4'>
      {/* First Grid */}
       <div className=" lg:col-span-6 col-span-12 p-4 rounded-xl bg-gradient-to-r from-green-200 via-yellow-300 to-blue-200">
       <h1 className="text-2xl font-bold">Contact Us</h1>
       <hr className='mb-4'/>
      <div className="mb-4"> 
        <label className="block text-sm font-bold mb-2" htmlFor="name" >Name</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text" 
        placeholder="Enter your name" />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="email" 
        type="email" 
        placeholder="Enter your email" />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2" htmlFor="message">Feedback</label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your Feedback"></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
         Send Feedback
        </button>
      </div>
    </div>
      {/* First Grid End */}

{/* Second Grid Start Here */}
    <div className='text-white lg:col-span-6 col-span-12 rounded-xl bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200'>
    <div className="max-w-lg mx-auto p-4 " >
        <h1 className="text-2xl font-bold  text-black">Contact Details</h1>
       <hr className='mb-4'/>
      <div className=" shadow-md rounded-lg px-4 py-6  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white">
        
        <table>
          <tr>
            <th>Name:</th>
            <td> Manoj Rawat</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td> positive.mind.123456789@gmail.com</td>
          </tr>

          <tr>
            <th>Adress: </th>
          <td>Meerabag (New Delhi)</td>
       
          </tr>
          <tr>
            <th>Phone: </th>
          <td>+91 8006152970</td>
   
          </tr>
        </table>
       
      </div>
    </div>
    </div>
{/* Second Grid End Here */}


    </div>
  )
}

export default MyContact
