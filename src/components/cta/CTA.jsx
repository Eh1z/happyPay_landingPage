import React from 'react'

const CTA = () => {
  return (
    <>
    <div className='bg w-full px-10 lg:px-32 py-32 flex justify-center items-center text-center'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl lg:text-6xl font-bold py-2'>
          All-in-One Travel & Luxury Experience. 
          </h1>
          <p className='w-full lg:w-[60%] py-5 text-md lg:text-lg mb-10'>
          We are not just another service provider; we are your gateway to a world of convenience, adventure, and indulgence. Here's why you should make us your trusted partner:
          </p>

          <a href="#">
            <button className='flex items-center justify-center hover:bg-[#fff2f2] bg-[#FF0000] hover:text-[#FF0000] text-white font-medium rounded-xl border-2 border-[#FF0000] px-8 py-3 ease-in-out transition-all duration-300 w-[180px]'>
              <p>Get Started</p>
            </button>
          </a>
        </div>
    </div>
    </>
  )
}

export default CTA