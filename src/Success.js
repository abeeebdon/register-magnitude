import { FaArrowLeft, FaCheck } from 'react-icons/fa'
const Success = ({ handleBack }) => {
  return (
    <div
      className="w-full max-w-[600px]  m-auto px-2 py-4 mt-8 fixed left-[0%] right-[0%] bg-[rgba(255,255,255,1)] z-20 rounded-lg opacity-100"
      style={{ animation: 'moveComponent 1s forwards' }}
    >
      <div className="my-6 py-4 rounded-[1rem] ">
        <div className="bg-violet-800 border-4 border-solid border-[#81f1d9] rounded-[50%] w-fit px-8 mx-auto py-8 text-center">
          <FaCheck className="text-white text-center text-[5rem] font-light mx-auto" />
        </div>
        <div className="text-center p-2 m-2">
          <h2 className="text-[2rem] font-bold">Congratulations</h2>
          <p className="w-[90%] mx-auto my-1 text-[1.2rem]">
            You have successfully registered for the 2CDC 1.0 event
          </p>
          <p className="text-blue-800 text-[1.3rem] animate-pulse">
            See you there!
          </p>
          <div className="bg-violet-800 mt-4 w-fit py-2 px-4 mx-auto rounded-lg text-white text-[1.2rem] hover:bg-violet-950">
            <button onClick={() => handleBack()}>
              Go back
              <FaArrowLeft className="inline  text-white ml-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Success
