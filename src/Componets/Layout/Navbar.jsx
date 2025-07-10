import React, { useState } from 'react'
import { MdFoodBank } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
const [isOppen,setIsOppen]=useState(false)
const handleDrop=()=>{
    setIsOppen(!isOppen)
}
  return (
    <div className='flex bg-white w-screen h-16 '>
      <div className='w-1/2 h-fit p-1 justify-center items-center'>
      <p className='flex h-8 ml-8 w-fit p-1.5 justify-center items-center text-2xl'><MdFoodBank /> Food Crest</p>
      </div>
      <div className='flex w-1/2 h-fit p-1.5 justify-center items-center bg-white space-x-4 '>
      <Link to={'/'}><p>Home</p></Link>
      <p className='flex h-full w-fit justify-center items-center' onClick={handleDrop}>Dishes <IoMdArrowDropdown />
      </p>
      {isOppen?<Dropdown/>:''}
      <p>About</p>
      <p>Menu</p>
      <Link to={"/reviews"}><p>Reviews</p></Link>
      <button className='bg-white border rounded-2xl border-solid border-red-600  h-fit w-24 p-3.5'>Login</button>


      </div>
    </div>
  )
}

export default Navbar
