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

  function handleBack() {
    setSuccess(false)
  }
  return (
    <>
      <main
        className={
          success ? 'opacity-15 relative w-full' : 'w-full bg-white relative'
        }
      >
        <Section />
        <Section5 success={success} setSuccess={setSuccess} />
        <Section2 />
        <Section3 />
        <Section4 />
        <Logos />
      </main>
      {success && <Success handleBack={handleBack} />}
    </>
  )
}

export default App
