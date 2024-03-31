import React from 'react'
import Guests from '../components/Guests'

const Section3 = () => {
  return (
    <section>
      <article>
        <div className="min-[900px]:w-[80%] flex items-center gap-[1rem] justify-center p-8 m-4 mx-auto">
          <h1 className="font-bold text-[2.5rem] text-blue-950">
            Our Distinguished Speakers
          </h1>
          <p className="w-[80%] text-[1.3rem]">
            The summit will feature a series of keynote addresses, fireside
            chats, and panel discussions with renowned leaders, industry
            experts, and thought leaders.
          </p>
        </div>
      </article>
      <Guests />
    </section>
  )
}

export default Section3
