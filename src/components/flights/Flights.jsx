import React from 'react';
import { Link } from 'react-scroll';
import { images } from '../../assets/'

const Flights = () => {
  return (
    <div className='px-10 lg:px-64 py-20 flex flex-col lg:flex-row justify-between items-center' id='flights'>

      <div className='w-[400px] hidden lg:block  lg:w-[800px]'>
        <img src={images.plane2} alt="" 
        className='rounded-lg'/>
      </div>

      <div className='lg:pl-64'>
        <h1 className='text-3xl lg:text-4xl font-semibold pb-5'>Flight Booking Made Easy</h1>
        <p className="w-full mb-5">Browse, compare, and book flights to destinations around the world effortlessly. Our competitive prices and convenient booking process ensure that your journey starts with ease and comfort.</p>
        <Link to='footer'>
            <button className='flex items-center justify-center bg-black hover:bg-[#FF0000] text-white font-medium rounded-xl  px-8 py-3 ease-in-out transition-all duration-300 w-[180px] mb-10 lg:mb-0'>
              <p>Get Started</p>
            </button>
          </Link>
      </div>

      <div className='w-[400px] lg:hidden'>
        <img src={images.plane2} alt="" 
        className='rounded-lg'/>
      </div>

    </div>
  )
}

export default Flights