import React from 'react'
import Guests from './Guests'
const Section3 = () => {
  return (
    <section className="text-center font-rubik">
      <div className="lg:w-[80%] sm:flex items-center gap-[1rem] justify-around p-8 m-4 mx-auto">
        <h1 className="font-bold text-[3rem] text-blue-900 basis-[50%]">
          Our Distinguished <br /> Speakers
        </h1>
        <p className="w-full sm:w-[80%] my-4 p-4 text-[1.3rem]">
          The summit will feature a series of keynote addresses, fireside chats,
          and panel discussions with renowned leaders, industry experts, and
          thought leaders.
        </p>
      </div>
      <Guests />
    </section>
  )
}

export default Section3
