import Signup from '../signup/Signup'
import About from './About'

const Section5 = ({ success }) => {
  return (
    <div className="md:flex justify-around sm:px-4">
      <Signup className="basis-[50%]" succeess={success} />
      <About className=" basis-[50%]" />
    </div>
  )
}

export default Section5
