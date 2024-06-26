import Signup from '../signup/Signup'
import Section1 from './Section1'

const Section5 = ({ setSuccess, success }) => {
  return (
    <section className="bg-slate-100">
      <div className="opacity-100 md:flex max-w-[1200px] mx-auto justify-around sm:px-4 gap-[1rem]">
        <Section1 />
        <Signup setSuccess={setSuccess} />
      </div>
    </section>
  )
}

export default Section5
