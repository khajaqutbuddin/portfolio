import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <div className=' border-b border-neutral-900  mb-8'>
       <motion.h2
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration:1.5}}
       className=' my-20 pb-4 text-4xl text-center '>Projects </motion.h2> 
       {
            PROJECTS.map(pro =>(
                <div key={pro.id} className=' mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                     whileInView={{opacity:1, x:0}}
                     initial={{opacity:0 , x:-100}}
                     transition={{duration:1.5, delay:0.5}}
                    className="w-full lg:w-1/4">
                     <img  src={pro.image} className=' rounded-md h-28 text-sm mb-6  text-neutral-400'/> 
                    </motion.div>
                    <motion.div
                      whileInView={{opacity:1, x:0}}
                      initial={{opacity:0 , x:100}}
                      transition={{duration:0.5}}
                    className=' w-full max-w-xl lg:w-3/4'>
                        <h6 className=' mb-2 font-semibold text-'>{ pro.title}    <span className='text-sm text-purple-100'>{}</span></h6>
                        <p className=' text-neutral-400 mb-4'>{pro.description}</p>
                        {pro.technologies.map(tech=>(
                         <span  key={tech.id} className=' rounded-sm  px-2 py-1 text-sm font-medium text-purple-800 bg-neutral-900     mr-3 mt-4' >{tech}</span>
                            
                        ))}
                    </motion.div>
                </div>
            ))
        }
    </div>
  )
}

export default Projects