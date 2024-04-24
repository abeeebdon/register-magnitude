import { FaCheck } from 'react-icons/fa'
const Success = () => {
  return (
    <div className="h-[100vh] ">
      <div className=" max-w-[400px]  mx-auto my-auto px-2 py-4 mt-8 ">
        <div className="my-6 py-4 rounded-[1rem] ">
          <div className="bg-purple-700 border-4 border-solid border-[#81f1d9] rounded-[50%] w-fit px-8 mx-auto py-8 text-center">
            <FaCheck className="text-white text-center text-[5rem] font-light mx-auto" />
          </div>
          <div className="text-center p-2 m-2">
            <h2 className="text-[2rem] font-bold">Success</h2>
            <p className="w-[90%] mx-auto my-1 text-[1.2rem]">
              You have successfully registered for this event
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Success
