import image1 from '../images/speaker1.jpg'
import image2 from '../images/speaker2.jpg'
const Guests = () => {
  return (
    <article className="font-rubik pb-8">
      <div className="w-full">
        <div className="w-full relative my-6 py-10 h-[100%] text-center mx-auto">
          <img src={image1} className="image" alt="elon" />
          <div className="bg-white p-4 w-[85%] absolute text-blue-600 text-[1.4rem] bottom-[-10%] left-0 right-0 mx-auto">
            <h2 className="font-bold">Gbolahan Alaba</h2>
            <p className="mt-4 text-[1.2rem]">Software Engineer</p>
          </div>
        </div>

        <div className="w-full relative h-[100%]">
          <img src={image2} className="image" alt="musk" />
          <div className="bg-white p-4 w-[85%] absolute text-blue-600 text-[1.4rem] bottom-[-10%] left-0 right-0 mx-auto">
            <h2 className="font-bold">Isaac Olowofila</h2>
            <p className="mt-4 text-[1.2rem]">CEO CovelTWorld</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Guests
