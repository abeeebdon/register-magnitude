import React from 'react'
import Guests from '../components/Guests'

const Section3 = () => {
  return (
    <section>
      <article className="flex justify-center items-center px-8 gap-[2%]">
        <h2 className="font-[900] text-blue-900 text-[2.4rem] basis-1/2">
          Our Distinguished Speakers
        </h2>
        <p className="basis-1/2">
          The summit will feature a series of keynote addresses, fireside chats,
          and panel discussions with renowned leaders, industry experts, and
          thought leaders.
        </p>
      </article>
      <article className="my-4 px-4">
        <Guests />
      </article>
    </section>
  )
}

export default Section3
