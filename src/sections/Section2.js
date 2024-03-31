import { useState, useEffect } from 'react'
const Section2 = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const d = new Date('2024-04-5')
      const eventDay = d.getTime()
      const presentDay = eventDay - now
      const timeleft = new Date(presentDay)
      if (timeleft > 0) {
        const day = timeleft.getDate()
        const hour = timeleft.getHours()
        const minute = timeleft.getMinutes()
        const second = timeleft.getSeconds()
        setCountdown({
          days: day,
          hours: hour,
          minutes: minute,
          seconds: second,
        })
      } else {
        clearInterval(interval)
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [countdown.days])

  return (
    <section className="font-rubik bg-blue-950 text-white p-8 m-4">
      <div className="min-[600px]:flex max-[500px]:flex-col justify-between items-center max-w-[1000px] mx-auto">
        <div>
          <h2 className="text-[4rem]">Event Countdown</h2>
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className=" ">
            <h1 className="text-[8rem] leading-11">{countdown.days}</h1>
            <div className="m-4">
              <p className=" text-[1rem] font-semibold text-center">Days</p>
            </div>
          </div>
          <div className="flex-col gap-0">
            <h1 className="font-[900] text-[3.5rem]">{countdown.hours}</h1>
            <p className=" text-[1rem] font-semibold text-center">Hours</p>
          </div>
          <div className="flex-col gap-0">
            <h1 className="font-[900] text-[3.5rem]">{countdown.minutes}</h1>
            <p className=" text-[1rem] font-semibold text-center">Minutes</p>
          </div>
          <div className="flex-col gap-0">
            <h1 className="font-[900] text-[3.5rem]">{countdown.seconds}</h1>
            <p className=" text-[1rem] font-semibold text-center">Seconds</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
