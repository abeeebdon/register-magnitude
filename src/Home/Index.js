import React from 'react'
import Signup from '../signup/Signup'
import Section1 from '../sections/Section1'
import Footer from '../sections/Footer'
import Section3 from '../sections/Section3'
import Section2 from '../sections/Section2'
import Section4 from '../sections/Section4'
import Logos from '../components/Logos'
import Section from '../sections/Section'
const Index = () => {
  return (
    <main className=" w-full">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Logos />
      <Signup />
      <Footer />
    </main>
  )
}

export default Index
