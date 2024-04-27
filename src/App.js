import React, { useEffect, useState } from 'react'
import Section3 from './sections/Section3'
import Section2 from './sections/Section2'
import Section4 from './sections/Section4'
import Logos from './sections/Logos'
import Section from './sections/Section'
import Success from './Success'
import Section5 from './sections/Section5'

function App() {
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }, [success])

  if (success) {
    return <Success />
  } else {
    return (
      <main className=" w-full bg-white">
        <Section />
        <Section5 success={success} setSuccess={setSuccess} />
        <Section2 />
        <Section3 />
        <Section4 />
        <Logos />
      </main>
    )
  }
}

export default App
