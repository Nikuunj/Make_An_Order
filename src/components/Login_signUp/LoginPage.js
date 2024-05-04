import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import TextBox from './TextBox';
import { motion } from 'framer-motion';
import Animation from './animation';
import axios from 'axios'


function LoginPage() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const [sumit, setSubmit] = useState(false);

  const navigate = useNavigate();

  function handle(event) {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const loginObj = [
    {
      id: "username",
      type: "text",
      name: "username",
      value: data.userName,
      onchan: handle,
      pls: "User name"
    },
    {
      id: "password",
      type: "password",
      name: "password",
      value: data.password,
      onchan: handle,
      pls: "Password"
    }
  ];

  const rend = loginObj.map(val => (
    <React.Fragment key={val.id}>
      <TextBox
        id={val.id}
        type={val.type}
        name={val.name}
        val={val.value}
        handles={val.onchan}
        plz={val.pls}
      />
      <br />
    </React.Fragment>
  ));

  const handleClick = () => {
    setSubmit(pre => !pre);
    alert('Button clicked!');
  };

  const url = 'http://localhost:5500/api/login';

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
    <div className='flex lg:flex-row flex-col gap-32 h-[85vh] items-center justify-center'>
      <Animation />
      <div>
      <form className="drop-shadow-2xl py-2" onSubmit={submit}>
          <div className='text-2xl font-medium text-center my-2'>Log-in Page</div>
          <motion.span
            className='container flex flex-col items-center px-14 py-9 rounded-lg bg-gray-200'
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {rend}
            <motion.input
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 0.85 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              className='box bg-[#9EB8D9] px-12 py-2 text-2xl outline-none text-zinc-100 rounded-2xl hover:ring-slate-400 hover:ring-2'
              type='submit'
              value="Send"
              onClick={handleClick}
            />
          </motion.span>
        </form>
        <motion.div
          className='box flex flex-row  gap-2'
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
          <Link to="/signup" className='text-xl text-blue-500 underline'>SignUp</Link>
          <div className='text-xl'>If you don't have account</div>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
