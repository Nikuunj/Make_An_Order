// import Strore from "./components/Store/Strore";
import Order from "./components/Store/Order";
import {Route, Routes } from "react-router-dom"; 
import { useState } from "react";
import Succsfull from "./components/Store/Succsfull"
import { useNavigate } from 'react-router-dom'
import React from "react"
import SignUp from './components/Login_signUp/SignUp'
import LoginPage from './components/Login_signUp/LoginPage'
// import Links  from './componet/Login_signUp/Link'
import Bodys from './components/Main/Body'
import Nav from './components/Main/Nav'
import { motion } from "framer-motion"
import Elementes from "./components/Store/Element";
// import Strore from "./componet/Store/Strore"
import Team from "./components/Team/Team";

function App() {
  const [element, setElement] = useState({
    'my-1' : false,
    'my-2' : false,
    'my-3' : false,
    'my-4' : false
  })
  const cost = [
    {
        prize : 4000,
        check : element['my-1'],
        name : 'my-1',
        product : "Precise Object Distance Estimation",
        dis : "Our state-of-the-art device, equipped with YOLO8n Object Detection technology, accurately gauges distances to surrounding objects, ensuring unparalleled safety and confidence in navigation."
    },
    {
        prize : 5000,
        check : element['my-2'],
        name : 'my-2',
        product : "Intuitive Voice-Guided Object Recognition",
        dis : "Seamlessly interact with your environment through our device's voice-guided object identification feature. Receive real-time audio descriptions of detected objects, empowering independent exploration and decision-making."
    },
    {
        prize : 7000,
        check : element['my-3'],
        name : 'my-3',
        product : "Personalized Facial Recognition",
        dis : "With advanced facial recognition capabilities, VisionAssist enhances social interactions by identifying familiar faces from stored data. Plus, it communicates in the preferred language of recognized individuals, fostering seamless communication and inclusivity."
    },
    {
      prize : 10000,
      check : element['my-4'],
      name : 'my-4',
      product : "Enhanced Image Description",
      dis : " Elevate your understanding of the world around you with our device's image description feature. Capture images and receive detailed audio descriptions, providing invaluable context for improved comprehension and navigation."
  }
]

const prize = {
  'my-1' : 4000,
  'my-2' : 5000,
  'my-3' : 7000,
  'my-4' : 10000
}

  // const amnt= useState([element])
  const [val,setVal] = useState(0)
  // const check = [element["my-1"], element["my-2"], element["my-3"]] 

  function click(name) {
    setElement(pre => {
        return {
            ...pre,
            [name] : !element[name]
        }
    })
    if(!element[name]) {
      setVal(pre => pre + prize[name])
    }
    if(element[name]) {
      setVal(pre => pre - prize[name])
    }
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };


  const nav = useNavigate()
  
  const click2 = () => {
    // console.log(props.prize)
    if(val === 0) {
        alert('Select any one product')
    } else {
        nav('./checkout')
    }
}
const rend = cost.map(val => (

  <div onClick={() => click(val.name)} className="z-50">
  <Elementes check={val.check} name={val.name} pd={val.product} pr={val.prize} dis={val.dis}/>
  </div>
))

const main = (
  <>
  <motion.div 
  variants={container}
  initial="hidden"
  animate="visible"
  className='container  mt-6 flex flex-row gap-10 justify-center'>
  {rend}
  </motion.div>
  <div className='flex justify-center my-8'>
  <button onClick={click2} className='bg-[#D7E4C0] hover:bg-[#BBC3A4] fixed top-[78vh] text-lg px-5 py-2 rounded-lg'>Checkout</button>
  </div>
  </>
)

  return (
    
    <motion.div  initial={{ scale: 0.3 }}
    animate={{ rotate: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 180,
      damping: 20
    }}
    className="bg-[#eff1ef] h-screen items-center justify-center">
        <div className="bg-[#f0f1f0] flex flex-col justify-center items-center">
            <Nav />
            <Routes>
                <Route path="" element={<Bodys />}/>
                <Route path="/home" element={<Bodys />}/>
                <Route path="/login" element={<LoginPage />}/>
                {/* <Route path="/donate" element={<Strore />}/> */}
                <Route path="/signup" element={<SignUp />} />
          <Route path="/buy" element= {main}/>
            <Route path="/checkout" element= {<Order val={val}/>}/>
            <Route path="/checkout/successfully" element={<Succsfull/>}/>
            <Route path="/team" element={<Team/>}/>
          </Routes>
        </div>
    </motion.div>
  );
}
export default App;
