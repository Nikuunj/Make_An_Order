import React from 'react'
import { Link } from 'react-router-dom'
import Welcome from './Welcome'

function Links() {
  return (
    <div className=' grid grid-cols-2 gap-3 justify-items-center items-center'>
      <Welcome />
      <div className='flex flex-col gap-3  bg-gray-200 rounded-lg shadow-lg p-16'>
        <Link to="/a" className='box bg-teal-700 px-12 py-2 text-2xl shadow-[inset_0px_5px_12px_0px_rgba(0,0,0,0.7)] outline-none text-zinc-100 rounded-2xl hover:ring-slate-400 hover:ring-2'>Log-in</Link>
        <Link to='/b' className='box bg-teal-700 px-12 py-2 text-2xl shadow-[inset_0px_5px_12px_0px_rgba(0,0,0,0.7)] outline-none text-zinc-100 rounded-2xl hover:ring-slate-400 hover:ring-2'>Sign-up</Link>
      </div>
    </div>
  )
}

export default Links