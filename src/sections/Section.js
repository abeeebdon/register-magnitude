const Section = () => {
  return (
    <div
      className=" h-[350px] sm:h-[70vh] bg-cover font-arial "
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(100,140,130,0.65), rgba(70,100,50,0.6)), url("/NYSC.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="py-10">
        <p className=" text-white mx-auto text-center  font-bold px-4 py-10 text-[3rem] sm:text-[5.2rem]">
          THE YOUTH{' '}
          <p className="text-[2rem] sm:text-[3.7rem]"> SOCIAL SUMMIT </p>
          <p className="text-[3rem] sm:text-[5rem]">NIGERIA 1.0 </p>
        </p>
      </div>
    </div>
  )
}

export default Section
