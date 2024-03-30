import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center gap-[1rem] text-blue-600 text-[1.2rem]">
      <Link>Home</Link>
      <Link>Register</Link>
      <Link>Guests</Link>
      <Link>Contact</Link>
    </div>
  )
}

export default NavBar
