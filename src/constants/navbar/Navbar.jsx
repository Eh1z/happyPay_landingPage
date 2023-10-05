import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-transparent backdrop-blur-sm fixed w-full py-3 px-32'>
      <div className='px-10 font-bold text-[#0153F1] text-3xl'>
        <span>
          Logo
        </span>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <ul 
          className='flex flex-row items-center justify-center gap-16 font-medium ease-in-out transition-all duration-300'>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125'>Crypto</li>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125'>Giftcards</li>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125'>Flights</li>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125'>Cars</li>
            <li className='hover:text-[#0153F1] cursor-pointer hover:scale-125'>Yachts</li>
          </ul>
        </div>

        <div className='bg-[#D5E2F3] hover:bg-[#f5f5f5] text-[#0153F1] font-medium rounded-xl border-2 border-[#D5E1F2] ml-10 px-10 py-3 ease-in-out transition-all duration-300'>
          <p>
            Get In Touch
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar