import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className=' border-b  justify-center text-center items-center border-neutral-900 '>
             <motion.h2
             whileInView={{opacity:1, y:0}}
             initial={{opacity:0, y:-100}}
             transition={{duration:1.5}}
             className=' my-20 pb-2 text-4xl text-center '>Get In Touch </motion.h2> 
             <div className='text-center tracking-tighter'>
             <p> {CONTACT.address}</p>
             <p>{CONTACT.phoneNo}</p>
             <a href="mailto:khajaqutbuddin123@gmail.com" >{CONTACT.email}</a>
             </div>
    </div>
  )
}

export default Contact