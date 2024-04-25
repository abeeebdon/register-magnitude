import Signup from '../signup/Signup'
import About from './About'

const Section5 = ({ success }) => {
  return (
    <div className="md:flex max-w-[1250px] mx-auto justify-around sm:px-4">
      <About className=" basis-[50%]" />
      <Signup className="basis-[50%]" succeess={success} />
    </div>
  )
}

export default Section5
