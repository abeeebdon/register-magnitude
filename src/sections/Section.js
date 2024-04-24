import { FaArrowRight } from 'react-icons/fa'

const Section = () => {
  return (
    <div
      className=" h-[350px] sm:h-[70vh] font-arial"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(200,100,20,0.8), rgba(20,50,150,0.8)), url("/NYSC.jpg")',
        backgroundRepeat: 'no repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="sm:py-10">
        <div className=" text-white mx-auto text-center  font-bold px-4 sm:py-10 text-[2.5rem] sm:text-[4rem]">
          THE YOUTH
          <br />
          <span className="text-[2rem] sm:text-[3rem]"> SOCIAL SUMMIT </span>
          <p className="text-[2.5 rem] sm:text-[3.5rem]">NIGERIA 1.0 </p>
          <p className="text-[2rem]">April 2024 | Lagos Nigeria</p>
        </div>
        <div className="bg-[#f071a6] mt-4 w-fit py-2 px-4 mx-auto rounded-lg text-white text-[1.2rem] hover:bg-[#f89ac3]">
          <a href="#register">
            Register Now <FaArrowRight className="inline  text-white ml-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Section
