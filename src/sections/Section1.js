import React from 'react'

const Section1 = () => {
  return (
    <div className=" my-8 p-4 mx-auto w-full max-w-[750px] relative min-[650px]:flex flex-row">
      <div className="w-fit border-[1.2rem] border-white rounded-full bg-blue-950 p-6 mx-auto absolute top-[-18%] right-0 left-0">
        <p className=" text-white mx-auto font-bold px-4 py-10 text-[2rem]">
          The Youth <br />
          Social Summit
          <br /> Nigeria
        </p>
      </div>
      <div className=" bg-blue-950 text-white pt-14 pb-8 p-4 mt-[4rem] ">
        <div className="mt-8">
          <p className="w-full max-w-[700px] mx-auto px-[1rem] pt-[5rem] text-[1.2rem]">
            "Welcome to our exciting event! We're thrilled to have you join us
            for an unforgettable experience filled with inspiration, networking,
            and fun. Get ready to immerse yourself in a day of engaging
            activities, enlightening discussions, and opportunities to connect
            with fellow attendees. From insightful keynote speakers to
            interactive workshops, this event promises to broaden your horizons
            and leave you feeling energized. So, sit back, relax, and enjoy
            every moment as we embark on this journey together. Welcome, and let
            the adventure begin!"
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section1
