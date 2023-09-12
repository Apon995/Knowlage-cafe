import React from 'react'
import profile from '../assets/profile.png'

function Header() {
  return (
    <>
    <header>
        <nav className=' py-2 flex items-center justify-between  border-b-[1px] border-gray-400'>
            <h1 className='md:text-3xl text-2xl text-black font-semibold'>Knowledge Cafe</h1>
            <img src={profile} alt="user profile" className='md:w-[50px] w-[35px]'/>
        </nav>
    </header>
    
    
    
    </>
  )
}

export default Header