import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from './componet/Login_signUp/SignUp'
import LoginPage from './componet/Login_signUp/LoginPage'
// import Links  from './componet/Login_signUp/Link'
import Bodys from './componet/Main/Body'
import Nav from './componet/Main/Nav'
import { motion } from "framer-motion"
import Strore from "./componet/Store/Strore"

function App() {
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
          {/* <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="" element={<Bodys />}/>
                <Route path="/home" element={<Bodys />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/donate" element={<Strore />}/>
                <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter> */}
        </div>
    </motion.div>
  )
}

export default App;