import React from 'react'
import  tool  from "../../assets/1.mp4"
import { motion } from 'framer-motion'

function Animation() {
  return (
    <motion.div 
    animate={{
      scale: [0, 0.2, 0.1, 0.3, 0.2, 0.4, 0.3, 0.5 ,0.4, 0.6,0.5, 0.7, 0.6, 0.8, 0.7, 0.9, 0.8, 1],
      // rotate: [0, 50, -40, 20, -20, 20 , 50, -30, -55, 35, 50, -30, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    className='w-[518px] flex flex-col items-center justify-center'>
    <video autoPlay loop muted className='border-none'>
      <source src={tool} type='video/mp4'className='border-none'/> 
    </video>
  </motion.div>
  )
}

export default Animation