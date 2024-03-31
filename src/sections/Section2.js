import React from 'react'

const Section2 = () => {
  return (
    <section className="bg-blue-900 text-white p-8 m-4 min-[600px]:flex justify-around items-center">
      <div>
        <p>Event Countdown</p>
      </div>
      <div className="flex gap-[1rem] justify-between">
        <div className="flex-col gap-0">
          <h1 className="font-[900] text-[3.5rem]">16</h1>
          <p className=" text-[1rem] font-semibold text-center">Days</p>
        </div>
        <div className="flex-col gap-0">
          <h1 className="font-[900] text-[3.5rem]">16</h1>
          <p className=" text-[1rem] font-semibold text-center">Days</p>
        </div>
        <div className="flex-col gap-0">
          <h1 className="font-[900] text-[3.5rem]">16</h1>
          <p className=" text-[1rem] font-semibold text-center">Days</p>
        </div>
        <div className="flex-col gap-0">
          <h1 className="font-[900] text-[3.5rem]">16</h1>
          <p className=" text-[1rem] font-semibold text-center">Days</p>
        </div>
      </div>
    </section>
  )
}

export default Section2
