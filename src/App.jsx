import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'

function App() {


  return (
    <>
   <h1 className='bg-red-600 text-center text-white'>CultreBoat</h1>
   <Header/>
   <HeroBanner/>
   <Footer/>
    </>

  )
}

export default App
