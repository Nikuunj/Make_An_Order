import React, { useState } from 'react'
import TextBoxs from './TextBox'
// import TextBoxs from './TextBox';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import axios from 'axios'

function Order(props) {
  
  const nav = useNavigate();
  const [data, setData] = useState({
    'username' : "",
    'address' : "",
    'email' : "",
    'pin' : ""
  });

  console.log(data)

  const obj = [
    {
      id : "username",
      type : "text",
      name : "username",
      value: data.userName,
      onchan : handle,
      pls : "User name"
    },
    {
      id : "address",
      type : "text",
      name : "address",
      value: data.address,
      onchan : handle,
      pls : "Address"
    },
    {
      id : "pin",
      type : "pin",
      name : "pin",
      value: data.pin,
      onchan : handle,
      pls : "Pincode"
    },
    {
      id : "phoneNumber",
      type : "email",
      name :"email",
      value: data.email,
      onchan : handle,
      pls : "Your email"
    }
  ]
  function handle(event) {  
    const {name, value, type, checked} = event.target
    setData(pre => {
      return {
        ...pre,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
      const rend = obj.map(val => (
        <>
        <TextBoxs 
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

      // const url = 'http://localhost:5000/verify'
      const submit = async(e) => {
        e.preventDefault()
        if(data.address === '' || data.number === '' || data.pin === '' || data.username === '') {
         alert('Enater a valid value') 
        } else {

          const url = 'http://localhost:5500/api/order';
          // if all value is filled
          console.log(data)
          {
            // make api call to our backend. we'll leave thisfor later
            axios
              .post(url, { 
              username: data.username,
              address: data.address,
              email: data.email,
              pin: data.pin,
              totalAmount : props.val
            })
              .then(function (response) {
                // console.log(response.data.token, "response.data.token");
                if (response.data) {
                  console.log(response)
                  // setToken(response.data.token);
                  nav("/checkout/successfully")
                }
              })
              .catch(function (error) {
                console.log(error, "error");
              });
          }


        }
      }
      const check = (data) => {
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (element === '') {
              return false
            }
          }
        }
        return true
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
  // {props.val}
  return (
    <div className='flex justify-center py-5'>
    <form action="" onSubmit={submit} method='POST' className="drop-shadow-2xl flex flex-col items-center bg-[#C6DCBA] py-5 rounded-lg">
      <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className='container px-10'
        >
        {rend}
      </motion.div>
    <br/>
    Your Total cost : {props.val}
    <br />
    <br />
    <button  className='bg-[#59B4C3] hover:bg-green-600 hover:text-zinc-200 text-lg px-5 py-2 rounded-lg'>Submit</button>
    {/* <button onClick={click2}>Checkout</button> */}
    </form> 
    </div>
  )
}

export default Order