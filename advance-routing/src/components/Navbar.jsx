import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className= 'flex py-4 item-center px-8 bg-cyan-800 justify-between'>
        <h2 className= 'text-2xl font-bold'>School of AI</h2>
        <div className= 'flex gap-10'>
          <Link className='text-lg fond-bold' to='/'>Home</Link>
          <Link className='text-lg fond-bold' to='/about'>About</Link>
          <Link className='text-lg fond-bold' to='/product'>Product</Link>
          <Link className='text-lg fond-bold' to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar