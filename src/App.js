import React, { useEffect, useState } from 'react'
import Signup from './signup/Signup'
import Section1 from './sections/Section1'
import Section3 from './sections/Section3'
import Section2 from './sections/Section2'
import Section4 from './sections/Section4'
import Logos from './sections/Logos'
import Section from './sections/Section'
import Success from './Success'

function App() {
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
    }, 2000)
  }, [success])

  if (success) {
    return <Success />
  } else {
    return (
      <main className=" w-full">
        <Section />
        <Section2 />
        <Signup setSuccess={setSuccess} />
        <Section1 />
        <Section3 />
        <Section4 />
        <Logos />
      </main>
    )
  }
}

export default App
