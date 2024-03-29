import React from 'react'
import Signup from '../signup/Signup'
import Header from '../Header/Index'
import Section1 from '../sections/Section1'
import Footer from '../sections/Footer'
import Section3 from '../sections/Section3'
const Index = () => {
  return (
    <main className="bg-red-50 w-full">
      <Header />
      <Section1 />
      <Signup />
      <Section3 />
      <Footer />
    </main>
  )
}

export default Index
