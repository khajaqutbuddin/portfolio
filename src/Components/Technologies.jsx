import React from 'react'
import { RiJavascriptLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiMongodb, SiRedux } from 'react-icons/si'
import { animate, motion } from 'framer-motion'

const iconVariants = (duration)=> ({
 initial :{y: -10},
 animate:{
  y:[10 , -10],
  transition:{
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse"
  }
 }
})



const Technologies = () => {
  return (
    <div className=' mb-12 pb-24 border-b border-neutral-900 justify-center text-center'>
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='text-center my-20 text-4xl mb-8'>Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className=' flex flex-wrap items-center justify-center gap-4 '>

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-neutral-800 border-4 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className=' rounded-2xl border-neutral-800 border-4 p-4'>
          <SiMongodb className='text-7xl text-green-400' />
        </motion.div>
        <motion.div
        
        variants={iconVariants(6.5)}
        initial="initial"
        animate="animate"className=' rounded-2xl border-neutral-800 border-4 p-4'>
          <RiTailwindCssLine className='text-7xl text-[#a5f3fc] ' />
        </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className=' rounded-2xl border-neutral-800 border-4 p-4 '>
          <RiNodejsLine className='text-7xl text-green-600' />
        </motion.div>
        <motion.div
         variants={iconVariants(6.5)}
         initial="initial"
         animate="animate"
        className=' rounded-2xl border-neutral-800 border-4 p-4 '>
          <SiRedux className='text-7xl text-[#764abc]' />
        </motion.div>
      </motion.div>
      </div>
  )
}

export default Technologies