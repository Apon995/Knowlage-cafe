import React from 'react'
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';


export default function App() {
  return (
    <div className='lg:px-[8%] md:px-[2%] px-[3%]'>
      <Header />
      <Home />
      <Footer/>
    </div>
  )
}
