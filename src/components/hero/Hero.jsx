import React from 'react';
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row items-center justify-center  px-5 lg:px-32 py-20 lg:py-20 w-full overflow-clip z-0'>
          
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

                <a href="#">
                  <button className='flex items-center justify-center hover:bg-[#fff2f2] bg-[#FF0000] hover:text-[#FF0000] text-white font-medium rounded-xl border-2 border-[#FF0000] px-8 py-3 ease-in-out transition-all duration-300 w-[180px]'>
                    <p>Get Started</p>
                  </button>
                </a>
              </div>
              
              <div className='flex justify-center items-center w-full artbox'>
                  <div className='design-container'>
                    <div className='circle' style={{ backgroundColor: "red" }}></div>
                    <img src="/src/assets/image.jpg" alt="" />
                  </div>

                  <div className='design-container'>
                    <img src="/src/assets/image.jpg" alt="" />
                    <div className='cylinder' style={{ backgroundColor: "orange" }}></div>
                  </div>

                  <div className='design-container'>
                    <div className='cylinder' style={{ backgroundColor: "green" }}></div>
                    <img src="/src/assets/image.jpg" alt="" />
                    <img src="/src/assets/image.jpg" alt="" />
                  </div>

                  <div className='design-container'>
                    <img src="/src/assets/image.jpg" alt="" />
                    <div className='cylinder' style={{ backgroundColor: "red" }}></div>
                  </div>

                  <div className='design-container'>
                    <img src="/src/assets/image.jpg" alt="" />
                  </div>
              </div>
              
          
    </div>

    <div className='w-full px-32 py-10 flex justify-center'>
      <h1 className='text-5xl font-bold'>Why Us?</h1>
    </div>
    </>
  )
}

export default Hero