import React from 'react';
import { Link } from 'react-scroll';
import { images } from '../../assets/'

const Cars = () => {
  return (
    <div className='px-10 lg:px-64 py-20 flex flex-col lg:flex-row justify-between items-center' id='cars'>
      <div className='lg:pr-64'>
        <h1 className='text-3xl lg:text-4xl font-semibold pb-5'>Luxury on Land & Water</h1>
        <p className="w-full ">Choose from a fleet of top-notch vehicles, from sleek sports cars to spacious SUVs. Whether you're on a business trip or a road trip, we have the perfect ride for your needs.</p>
        <p className="w-full mt-2 mb-5">Experience the epitome of luxury as you cruise through stunning waters aboard a private yacht. Create unforgettable memories and indulge in the ultimate relaxation and adventure.</p>
        <Link to='footer'>
            <button className='flex items-center justify-center bg-black hover:bg-[#FF0000] text-white font-medium rounded-xl  px-8 py-3 ease-in-out transition-all duration-300 w-[180px] mb-10 lg:mb-0'>
              <p>Get Started</p>
            </button>
          </Link>
      </div>

      <div className='w-[400px] lg:w-[800px] flex justify-end '>
        <img src={images.car2} alt="" 
        className='rounded-lg'/>
      </div>
    </div>
  )
}

export default Cars