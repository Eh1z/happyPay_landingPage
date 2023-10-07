import React from 'react'

const Crypto = () => {
  return (
    <div className='px-10 lg:px-80 py-20 flex justify-between items-center'>
      <div>
        <h1 className='text-3xl lg:text-4xl font-semibold pb-5'>Trade Your Coins & Giftcards</h1>
        <p className="w-[600px] mb-5">Our platform offers a seamless and secure way to buy, sell, and manage giftcaards & cryptocurrencies. You can navigate the exciting world of digital assets with confidence.</p>
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

export default Crypto