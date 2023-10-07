import React from 'react'

const Flights = () => {
  return (
    <div className='px-10 lg:px-80 py-20 flex justify-between items-center'>

      <div className='w-[500px] '>
        <img src="/src/assets/image.jpg" alt="" 
        className='rounded-lg'/>
      </div>

      <div>
        <h1 className='text-3xl lg:text-4xl font-semibold pb-5'>Flight Booking Made Easy</h1>
        <p className="w-[600px] mb-5">Browse, compare, and book flights to destinations around the world effortlessly. Our competitive prices and convenient booking process ensure that your journey starts with ease and comfort.</p>
        <a href="#">
            <button className='flex items-center justify-center bg-black hover:bg-[#FF0000] text-white font-medium rounded-xl  px-8 py-3 ease-in-out transition-all duration-300 w-[180px]'>
              <p>Get Started</p>
            </button>
          </a>
      </div>
    </div>
  )
}

export default Flights