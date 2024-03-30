import { IoLocationSharp } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-around items-start my-4 p-4 gap-[5%]">
      <div className="basis-1/3">
        <h2>Details</h2>
        <p>
          The Academy is a Fellowship programme that offers life changing,
          non-partisan and meritocratic opportunities for young Nigerians who
          desire to impact their generation.
        </p>
      </div>
      <div className="basis-1/3">
        <h2>Contact info:</h2>
        <div className="flex items-center gap-4">
          <IoLocationSharp className="text-[4rem] text-blue-800" />
          <p>
            987 Willow Street, Suite 305, Brookside Terrace, toofsn area
            ajandksne outlet orogun lagos
          </p>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-[4rem] text-blue-800" />
          <p>
            987 Willow Street, Suite 305, Brookside Terrace, toofsn area
            ajandksne outlet orogun lagos
          </p>
        </div>
      </div>
      <div className="basis-1/3">
        <h2>Powered by</h2>
        <img src="./logo.png" alt="logo" className="w-[60px]" />
      </div>
    </footer>
  )
}

export default Footer
