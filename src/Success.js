import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className="w-full max-w-[400px]  mx-auto my-auto px-2 py-4 mt-8">
      <div className="my-6 py-4 min-[350px]:border border-slate-300 rounded-[1rem] bg-white">
        <div className="bg-[#13c39c] border-4 border-solid border-[#81f1d9] rounded-[50%] w-fit px-8 mx-auto py-8 text-center">
          <FaCheck className="text-white text-center text-[5rem] font-light mx-auto" />
        </div>
        <div className="text-center p-2 m-2">
          <h2 className="text-[2rem] font-bold">Success</h2>
          <p className="w-[70%] mx-auto my-1 text-[1rem]">
            You have successfully registered for this event
          </p>
          <Link to="/">
            <p className="text-white bg-blue-500 p-1">Go Back</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Success
