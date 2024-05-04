import React from 'react'
import { motion } from 'framer-motion'

function TextBoxs(props) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.input 
    variants={item} 
    className="item rounded text-center border-b-2 bg-transparent border-zinc-400 outline-none py-1 focus:border-zinc-900 px-6"
    whileFocus={{ scale:1.3 }}
    id={props.id} 
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={props.handles}
    placeholder={props.plz}
    />
  )
}

export default TextBoxs