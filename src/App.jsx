import React from 'react'



import { Navbar, Footer } from './constants'
import { Cars, Crypto, Flights, Giftcards, Hero, Yatch } from './components'

const App = () => {
  return (
    <div className='bg-[#F4F5F8] font-poppins'>
    <Navbar/>
    <Hero/>
    <Crypto/>
    <Giftcards/>
    <Flights/>
    <Cars/>
    <Yatch/>
    <Footer/>
    </div>
  )
}

export default App