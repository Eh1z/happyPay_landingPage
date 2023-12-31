import React from 'react';
import Typewriter from "typewriter-effect";
import { Link } from 'react-scroll'
import { images } from '../../assets/'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row items-center justify-center  px-5 lg:px-32 py-20 lg:py-20 w-full overflow-clip z-0' id='home'>
          
              <div className='lg:pl-20 py-20 lg:py-64 text-left '>
                <div className='text-3xl lg:text-6xl font-bold '>
                  <h1 className='py-2'>Your Ultimate Hub For</h1>
                  <div className='text-[#FF0000]'>
                  <Typewriter
                      onInit={(typewriter) => {
                          typewriter
                              .typeString("Crypto Exchanges")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("Giftcards Trades")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("Flight Bookings")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("Car Rentals")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("Yacht Rentals")
                              .pauseFor(1000)
                              .deleteAll()
                              .start();
                      }}
                      options={{
                        autoStart: true,
                        loop: true,
                      }}  
                      />
                  </div>
                  <h1 className='py-2'>All in One Place!</h1>
                </div>

                <div className='w-full text-left text-md'>
                  <p className='w-full lg:w-[60%] py-5'>
                  Explore endless possibilities with our all-in-one platform offering crypto and gitcards trades, flights, cars, and yachts. Your digital, travel, and luxury desires, all in one place.
                  </p>
                </div>

                <Link to="footer">
                  <button className='flex items-center justify-center hover:bg-[#fff2f2] bg-[#FF0000] hover:text-[#FF0000] text-white font-medium rounded-xl border-2 border-[#FF0000] px-8 py-3 ease-in-out transition-all duration-300 w-[180px]'>
                    <p>Get Started</p>
                  </button>
                </Link>
              </div>
              
              <div className='flex justify-center items-center w-full artbox'>
                  
                    <div className='design-container' >
                    <div className='circle' style={{ backgroundColor: "red" }}></div>
                    <img src={images.plane1} alt="" className='scale-x-[-1]' />
                  </div>

                  <div className='design-container'>
                    <img src={images.yacht1} alt="" />
                    <div className='cylinder' style={{ backgroundColor: "orange" }}></div>
                  </div>

                  <div className='design-container'>
                    <div className='cylinder' style={{ backgroundColor: "green" }}></div>
                    <img src={images.crypto1} alt="" />
                    <img src={images.car2} alt="" />
                  </div>

                  <div className='design-container'>
                    <img src={images.yacht2} alt="" />
                    <div className='cylinder' style={{ backgroundColor: "red" }}></div>
                  </div>

                  <div className='design-container'>
                    <img src={images.plane2} alt="" />
                  </div>
              </div>
              
          
    </div>

    <div className='w-full text-center lg:px-32  flex flex-col justify-center items-center mb-0 lg:mb-32'>
      <h1 className='text-4xl font-bold mb-20'>Why Choose Us?</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 pb-32'>
        <div className='bg-white w-[300px] h-[280px] flex flex-col justify-center items-center text-center p-10 rounded-xl border-2 border-[#E8E8E8] hover:border-[#FF0000] hover:shadow-lg hover:shadow-red-500/50 transition-all ease-in-out duration-500'>
          <img src={images.payment} alt="" 
          className='w-[60px] h-[60px]'/>
          <h2 className='font-bold py-3 text-xl'>
            Ease of Payments
          </h2>
          <p className=''>
          We prioritize your convenience with a seamless payment process, so you can focus and enjoy the experince.
          </p>
        </div>


        <div className='bg-white w-[300px] h-[280px] flex flex-col justify-center items-center text-center p-10 rounded-xl border-2 border-[#E8E8E8] hover:border-[#FF0000] hover:shadow-lg hover:shadow-red-500/50 transition-all ease-in-out duration-500'>
          <img src={images.price} alt="" 
          className='w-[60px] h-[60px]'/>
          <h2 className='font-bold py-3 text-xl'>
            Competitive Pricing
          </h2>
          <p className=''>
          Enjoy premium experiences without breaking the bank with our competitive rates across all services.
          </p>
        </div>


        <div className='bg-white w-[300px] h-[280px] flex flex-col justify-center items-center text-center p-10 rounded-xl border-2 border-[#E8E8E8] hover:border-[#FF0000] hover:shadow-lg hover:shadow-red-500/50 transition-all ease-in-out duration-500'>
          <img src={images.help} alt="" 
          className='w-[60px] h-[60px]'/>
          <h2 className='font-bold py-3 text-xl'>
            Expert Support
          </h2>
          <p className=''>
          We are dedicated to assisting you, whether it be trading or planning your dream vacation.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero