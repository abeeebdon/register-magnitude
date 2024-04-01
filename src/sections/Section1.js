import React from 'react'

const Section1 = () => {
  return (
    <div className=" my-8 p-4 mx-auto w-full max-w-[750px] relative min-[650px]:flex flex-row">
      <div className="w-fit border-[1rem] border-white rounded-full bg-blue-950 p-6 mx-auto absolute min-[650px]:top-[0%] min-[650px]:bottom-[0%] min-[650px]:left-[50%] min-[650px]:right-[0%] top-[-17%] right-0 left-0">
        <p className=" text-white mx-auto px-4 py-8 text-[1.2rem]">
          The Youth <br />
          Social Summit
          <br /> Nigeria
        </p>
      </div>
      <div className=" bg-blue-950 text-white pt-10 p-4 mt-12 ">
        <p className="w-full max-w-[650px] mx-auto px-[1rem] pt-[5rem]">
          "Welcome to our exciting event! We're thrilled to have you join us for
          an unforgettable experience filled with inspiration, networking, and
          fun. Get ready to immerse yourself in a day of engaging activities,
          enlightening discussions, and opportunities to connect with fellow
          attendees. From insightful keynote speakers to interactive workshops,
          this event promises to broaden your horizons and leave you feeling
          energized. So, sit back, relax, and enjoy every moment as we embark on
          this journey together. Welcome, and let the adventure begin!"
        </p>
      </div>
    </div>
  )
}

export default Section1
