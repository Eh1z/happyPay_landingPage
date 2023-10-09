import React from 'react';
import { Link } from 'react-scroll';
import { images } from '../../assets/'

const Crypto = () => {
  return (
    <div className='px-10 lg:px-64 py-20 flex flex-col lg:flex-row justify-between items-center' id='crypto'>
      <div className='lg:pr-64'>
        <h1 className='text-3xl lg:text-4xl font-semibold pb-5'>Trade Your Coins & Giftcards</h1>
        <p className="w-full mb-5">Our platform offers a seamless and secure way to buy, sell, and manage giftcaards & cryptocurrencies. You can navigate the exciting world of digital assets with confidence.</p>
        <Link to='footer'>
            <button className='flex items-center justify-center bg-black hover:bg-[#FF0000] text-white font-medium rounded-xl  px-8 py-3 ease-in-out transition-all duration-300 w-[180px] mb-10 lg:mb-0'>
              <p>Get Started</p>
            </button>
          </Link>
      </div>

      <div className='w-[400px] lg:w-[800px] flex justify-end '>
        <img src={images.crypto2} alt="" 
        className='rounded-lg'/>
      </div>
    </div>
  )
}

export default Crypto