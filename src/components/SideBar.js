import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className="flex-col gap-[1rem] text-blue-600 text-[1.2rem] h-[100%]  bg-slate-300 w-[40%] fixed right-0 top-[10%] p-4">
      <div className="m-4">
        <Link>Home</Link>
      </div>
      <div className="m-4">
        <Link>Register</Link>
      </div>
      <div className="m-4">
        <Link>Guests</Link>
      </div>
      <div className="m-4">
        <Link>Contact</Link>
      </div>
    </div>
  )
}

export default SideBar
