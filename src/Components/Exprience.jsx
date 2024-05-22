import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
const Exprience = () => {
  return (
    <div className=' border-b border-neutral-900'>
       <motion.h2
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1.5}}
       className=' my-20 text-4xl text-center '>Exprience </motion.h2> 
       <div>
        {
            EXPERIENCES.map(exp =>(
                <div key={exp.id} className=' mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                      whileInView={{opacity:1, x:0}}
                      initial={{opacity:0 , x:-100}}
                      transition={{duration:1.5, delay:0.5}}
                    className="w-full lg:w-1/4">
                       <p className=' text-sm mb-2 text-neutral-400'>{exp.year} </p> 
                    </motion.div>
                    <motion.div
                     whileInView={{opacity:1, x:0}}
                     initial={{opacity:0 , x:100}}
                     transition={{duration:0.5}}
                    className=' w-full max-w-xl lg:w-3/4'>
                        <h6 className=' mb-2 font-semibold text-'>{exp.role}   - <span className='text-sm text-purple-100'>{exp.company}</span></h6>
                        <p className=' text-neutral-400 mb-4'>{exp.description}</p>
                        {exp.technologies.map(tech=>(
                         <span  key={tech.id} className=' rounded-sm  px-2 py-1 text-sm font-medium text-purple-800 bg-neutral-900     mr-3 mt-4' >{tech}</span>
                            
                        ))}
                    </motion.div>
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default Exprience