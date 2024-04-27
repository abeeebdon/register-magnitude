import React from 'react'
import Guests from './Guests'
const Section3 = () => {
  return (
    <section className="text-center font-rubik">
      <div className="lg:w-[80%] sm:flex items-center gap-[1rem] justify-around p-8 m-4 mx-auto">
        <h1 className="font-bold text-[3rem] text-blue-950 basis-[50%]">
          Our Distinguished <br /> Speakers
        </h1>
        <p className="w-full sm:w-[80%] my-4 p-4 text-[1.3rem]">
          Renowned experts and thought leaders will share their insights on the
          latest trends and advancements in technology, inspiring participants
          to embrace innovation and change
        </p>
      </div>
      <Guests />
    </section>
  )
}

export default Section3
