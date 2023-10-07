import React from 'react'



import { Navbar, Footer } from './constants'
import { Cars, Crypto, Flights, Hero, CTA } from './components'

const App = () => {
  return (
    <div className='bg-[#f5f5f5] font-poppins '>
    <Navbar/>
    <Hero/>
    <Crypto/>
    <Flights/>
    <Cars/>
    <CTA/>
    <Footer/>
    </div>
  )
}

export default App