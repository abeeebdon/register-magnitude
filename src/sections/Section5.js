import Signup from '../signup/Signup'
import Section1 from './Section1'

const Section5 = ({ success }) => {
  return (
    <div className="md:flex max-w-[1250px] mx-auto justify-around sm:px-4">
      <Signup className="basis-[50%]" succeess={success} />
      <Section1 />
    </div>
  )
}

export default Section5
