import React from 'react'
import { HERO_CONTENT } from '../constants'
import Profilepic from "../assets/kevinRushProfile.png"
import { motion } from "framer-motion"

const container = (delay)=>({
  hidden:{
    x: -100,opacity:0,},
  visible:{ 
    x:0 , 
    opacity: 1,
    transition:{duration:0.5, delay:delay}
    }
})

const onResumeDownload = () => {
  const resumeUrl = "../assets/Resume.pdf"; // Update with the path to your resume file
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "My_Resume.pdf"; // Specify the filename for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Hero = () => {
  return (
    <div className=' border-b border-red-900 pb-6 lg:mb-36 '>
      <div className=' flex flex-wrap'>
      <div className=' w-full lg:w-1/2 '>
        <div className=' flex flex-col items-center lg:items-start'>
      <motion.h1 
      variants={ container(0)}
      initial="hidden"
      animate="visible"
      className='pb-16 text-6xl font-thin tracking-tight lg:mb-16 lg:text-[80px] '> Khaja Qutbuddin </motion.h1>
      <motion.span 
        variants={ container(0.5)}
        initial="hidden"
        animate="visible"
    className=' bg-gradient-to-t from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> Front End Developer </motion.span>
      <motion.p
        variants={ container(0.9)}
        initial="hidden"
        animate="visible"
      className=' py-6 my-2  font-light max-w-xl'>{HERO_CONTENT} </motion.p>
        <button onClick={onResumeDownload} className='  bg-gradient-to-t from-blue-400 via-slate-500 to-green-500 bg-clip-text text-2xl tracking-tight text-transparent '>Get Resume </button>
      </div>

      </div>
      <div className='w-full lg:w-1/2 '>
        <div className=' flex justify-center'>
        <motion.img 
          initial={{x:100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1, delay:1.2}}
        src={Profilepic} alt="ProfilePic" srcset="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero