import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex border border-gray-200 bg-gray-200 py-4 px-6 justify-start space-x-8 items-center'>
          <h1 className='text-2xl'>MERN</h1>
         <ul className='flex text-gray-800 space-x-8'>
            <li><Link to="/">Create Post</Link></li>
            <li><Link to="/all">All Post</Link></li>
         </ul>
    </div>
    </>
  )
}

export default Navbar



