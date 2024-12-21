import { useState, useEffect } from 'react'
const Section2 = () => {
  const EventDay = '2025-02-22' // Set the date of the event
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const eventDay = new Date(EventDay).getTime()
      const timeLeft = eventDay - now

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

        setCountdown({ days, hours, minutes, seconds })
      } else {
        clearInterval(interval)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, []) // No need for dependencies

  return (
    <section className="font-rubik bg-blue-950 text-white py-4">
      <div className="sm:flex justify-between items-center max-w-[1200px] px-2 mx-auto ">
        <div className="text-[2.5rem] leading-tight">
          <h2 className="font-semibold text-center">Event Countdown</h2>
        </div>
        <div className="text-center flex items-center gap-[1rem] md:gap-[2rem] justify-around p-2 ">
          <div className=" flex-col gap-0">
            <h1 className="countdown-heading">
              {countdown.days < 10 ? `0${countdown.days}` : countdown.days}
            </h1>
            <p className="text-[1rem] font-semibold text-center">Days</p>
          </div>
          <div className="flex-col gap-0">
            <h1 className="countdown-heading">
              {countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}
            </h1>
            <p className=" text-[1rem] font-semibold text-center">Hours</p>
          </div>
          <div className="flex-col gap-0">
            <h1 className="countdown-heading">
              {countdown.minutes < 10
                ? `0${countdown.minutes}`
                : countdown.minutes}
            </h1>
            <p className=" text-[1rem] font-semibold text-center">Minutes</p>
          </div>
          <div className="flex-col gap-0">
            <h1 className="countdown-heading">
              {countdown.seconds < 10
                ? `0${countdown.seconds}`
                : countdown.seconds}
            </h1>
            <p className=" text-[1rem] font-semibold text-center">Seconds</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
