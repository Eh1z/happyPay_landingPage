import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex justify-between items-center bg-transparent backdrop-blur-sm fixed w-full py-3 px-3 lg:px-32'>
          <div className='pr-10 font-bold text-[#0153F1] text-3xl'>
            <span>
              Logo
            </span>
          </div>

      <div className='hidden lg:flex justify-center items-center'>
          <ul 
          className='hidden lg:flex flex-row items-center justify-center gap-12 font-medium ease-in-out transition-all duration-300'>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 px-3 '>Crypto</li>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 px-3 '>Giftcards</li>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 px-3 '>Flights</li>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 px-3 '>Cars</li>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 px-3 '>Yachts</li>
          </ul>

          <div className='flex items-center justify-center bg-[#D5E2F3] hover:bg-[#f5f5f5] text-[#0153F1] font-medium rounded-xl border-2 border-[#D5E1F2] ml-10 px-8 py-3 ease-in-out transition-all duration-300 w-[180px]'>
          <p>Get In Touch</p>
          </div>
      </div>

      
      <div className='lg:hidden w-[45px] h-[45px] rounded-full relative justify-center items-center'>
      <HiMenuAlt3 className='w-full h-[80%] mt-3 text-[#0153F1] cursor-pointer' onClick={() => setToggle(true)} />

    { toggle && (

      <motion.div 
      className='fixed flex top-5 right-3 z-20 pb-10 w-[400px] flex-col justify-center items-center bg-[#ffff] rounded-2xl shadow-2xl text-lg'
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.3, ease: 'linear' }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 }
      }}
      >
          <div className='pl-80 py-2'>
              <HiX className='w-[35px] h-[35px] my-2 text-[#DA3338]'
              onClick={() => setToggle(false)}/>
          </div>


            <ul className='flex flex-col items-center justify-center font-medium ease-in-out transition-all duration-300'>
                <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 py-8 '>Crypto</li>
                <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 py-8 '>Giftcards</li>
                <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 py-8 '>Flights</li>
                <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 py-8 '>Cars</li>
                <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125 py-8 '>Yachts</li>
            </ul>

            <div className='mt-20 bg-[#D5E2F3] hover:bg-[#f5f5f5] text-[#0153F1] font-medium rounded-xl border-2 border-[#D5E1F2] px-10 py-3 ease-in-out transition-all duration-300'>
              <p>Get In Touch</p>
            </div>
        </motion.div>

    )}
        
    </div>
    </div>
  )
}

export default Navbar