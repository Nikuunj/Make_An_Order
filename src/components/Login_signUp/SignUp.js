import React,{useState, useEffect} from 'react'
import TextBox from './TextBox'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Animation from './animation'
import axios from 'axios'


function SignUp() {
  const [data,setData] = useState({
    name : "",
    userName: "",
    password: "",
    email : "",
    confirmPass : "",
  })

  const navigate = useNavigate();
  const signObj = [
    {
     id : "name",
     type : "text",
     name : "name",
     value: data.name,
     onchan : handle,
     pls : "Your name"
    },
    {
      id : "username",
      type : "text",
      name : "userName",
      value: data.userName,
      onchan : handle,
     pls : "Username"

    },
    {
      id : "email",
      type : "email",
      name : "email",
      value: data.email,
      onchan : handle,
      pls : "Your email"

    },
    {
      id : "password",
      type : "password",
      name : "password",
      value: data.password,
      onchan : handle,
      pls : "Password"

    },
    {
      id : "confirmPass",
      type : "password",
      name : "confirmPass",
      value: data.confirmPass,
      onchan : handle,
      pls : "Confirm Password"
    
    }]

  const rend = signObj.map(val => (
    <>
      <TextBox 
      key = {val.id}
      id = {val.id}
      type = {val.type}
      name = {val.name}
      val = {val.value}
      handles = {val.onchan}
      plz = {val.pls}
      />
      <br />
    </>
  ))
  const [check, setcheck] = useState(false)

  function handle(event) {
    const {name, type, value, checked} = event.target
    setData(pre => {
      return {
        ...pre, 
        [name] : type ==='checkbox' ? checked : value
      }
    })
  }
  useEffect(() => {
    if(data.confirmPass !== data.password) {
      setcheck(false)
      return
    } else {
      setcheck(true)
      return
    }
  },[data.password, data.confirmPass])

  const handleClick = () => {
    alert('Button clicked!');

  };

  const url = 'http://localhost:5500/api/signup'
  const submit = async(event) => {
    event.preventDefault()
    console.log(data)
    {
      // make api call to our backend. we'll leave thisfor later
      axios
        .post(url,data)
        .then(function (response) {
          // console.log(response.data.token, "response.data.token");
          if (response.data) {
            console.log(response)
            // setToken(response.data.token);
            navigate("/home");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
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
  return (
    <div className='flex lg:flex-row flex-col gap-32 min-h-[84vh] items-center justify-center'>
      <Animation />
    <div>
    <form className="drop-shadow-2xl py-2" onSubmit={submit}>
      <div className='text-2xl font-medium text-center my-2'>Sign-Up Page</div>
      <motion.span 
      className='container flex flex-col items-center px-14 py-9 rounded-lg bg-gray-200' 
      variants={container}
      initial="hidden"
      animate="visible"
        >
        {rend}
      {check ? <motion.input
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale:0.85 }}
        transition={{
          duration: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        className='box bg-[#9EB8D9] px-12 py-2 text-2xl outline-none text-zinc-100 rounded-2xl hover:ring-slate-400 hover:ring-2'
        type= 'submit'
        value="Send" 
        onClick={handleClick}
      /> : ""}
      </motion.span>
    </form>

    {check ? "" : <div className='text-red-600 whitespace-pre-line pb-2'>
              *Your password and confirmPass
               password if different
       </div>}
    <motion.span
     className='box flex flex-row  gap-2 pt-1'
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{
       duration: 0.3,
       ease: [0, 0.71, 0.2, 1.01],
       scale: {
         type: "spring",
         damping: 8,
         stiffness: 100,
         restDelta: 0.001
      }
    }}
    >
      <Link to="/login"
       className='text-xl text-blue-500 underline'
      >login
      </Link>
      <div className='text-xl'>If you already have account</div>
    </motion.span>
    </div>
    </div>
  )
}

export default SignUp