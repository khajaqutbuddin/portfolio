
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
        <nav className=' py-2 mb-20 items-center justify-between text-white flex flex-1  '>
         <div className=' flex-shrink-0 font-bold text-4xl m-2 justify-start'> 
         <a href="./"> <h1>KQS</h1></a>
         </div>
      
        <div className=' flex px-2 mx-3 gap-5  sm:gap-16  sm:text-xl  '> 
           <span className='hover:animate-bounce ' > <a href="https://github.com/khajaqutbuddin"><BsGithub/></a> </span> 
           <span className='hover:animate-bounce '> <a href="https://www.linkedin.com/in/khaja-qutbuddin-347184223/"><BsLinkedin/></a> </span> 
           <span className='hover:animate-bounce animate-pulse '> <a href="https://www.instagram.com/khaja.qutbuddin/"><BsInstagram/></a> </span>  
        </div>
        </nav>
    </>
  )
}

export default Navbar