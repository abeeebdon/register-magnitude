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
    <section className="bg-blue-900 text-white p-8 m-4 min-[600px]:flex justify-around items-center">
      <div>
        <h2 className="font-bold text-xl">Event Countdown</h2>
      </div>
      <div className="flex gap-[1rem] justify-between">
        <div className="flex-col gap-0">
          <h1 className="font-[900] text-[3.5rem]">{countdown.days}</h1>
          <p className=" text-[1rem] font-semibold text-center">Days</p>
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
    </section>
  )
}

export default Section2
