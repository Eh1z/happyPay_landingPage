import React from 'react'

const Cars = () => {
  return (
    <div className='px-10 lg:px-80 py-20 flex justify-between items-center'>
      <div>
        <h1 className='text-3xl lg:text-4xl font-semibold pb-5'>Luxury on Land & Water</h1>
        <p className="w-[600px] ">Choose from a fleet of top-notch vehicles, from sleek sports cars to spacious SUVs. Whether you're on a business trip or a road trip, we have the perfect ride for your needs.</p>
        <p className="w-[600px] mt-2 mb-5">Experience the epitome of luxury as you cruise through stunning waters aboard a private yacht. Create unforgettable memories and indulge in the ultimate relaxation and adventure.</p>
        <a href="#">
            <button className='flex items-center justify-center bg-black hover:bg-[#FF0000] text-white font-medium rounded-xl  px-8 py-3 ease-in-out transition-all duration-300 w-[180px]'>
              <p>Get Started</p>
            </button>
          </a>
      </div>

      <div className='w-[500px] '>
        <img src="/src/assets/image.jpg" alt="" 
        className='rounded-lg'/>
      </div>
    </div>
  )
}

export default Cars