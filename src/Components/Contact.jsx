import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { BiMap } from 'react-icons/bi'
import { MdCall } from 'react-icons/md'
import { BsMailbox, BsMailboxFlag } from 'react-icons/bs'
import { CgMail, CgMailForward } from 'react-icons/cg'
const Contact = () => {
  return (
    <div className=' border-b  justify-center text-center items-center border-neutral-900 '>
             <motion.h2
             whileInView={{opacity:1, y:0}}
             initial={{opacity:0, y:-100}}
             transition={{duration:1.5}}
             className=' my-20 pb-2 text-4xl text-center'>Get In Touch </motion.h2> 
             
             <div className='text-center tracking-tighter mb-8'>
           
             <span className=' flex text-center items-center justify-center mt-2'><CgMail className=' text-lg mx-2'/><a  href="mailto:khajaqutbuddin123@gmail.com">  {CONTACT.email}</a></span>
             <span className=' flex text-center items-center justify-center mt-2'><MdCall className=' text-lg mx-2'/><span >  {CONTACT.phoneNo}</span></span>
             <span className=' flex text-center items-center justify-center mt-2'><BiMap  className=' text-lg mx-2'/><span>  {CONTACT.address}</span></span>
             <span className=' flex text-center items-center justify-center'><span>  {CONTACT.state}</span></span>
             </div>
    </div>
  )
}

export default Contact