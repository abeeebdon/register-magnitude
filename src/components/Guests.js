import image1 from '../images/atiku.jpg'
import image2 from '../images/Elon Musk.jpg'
import image3 from '../images/mark.jpg'
const Guests = () => {
  return (
    <article className="w-full m-2">
      <div className="flex min-[600px]:w-[85%] justify-center gap-[5%] mx-auto text-center">
        <div className="w-full max-w-[350px] relative">
          <img src={image1} className="image" alt="elon" />
          <div className="bg-white p-4 w-[65%] absolute bottom-[0%] left-0 right-0 mx-auto">
            <h2>Name</h2>
            <p>Role</p>
          </div>
        </div>
        <div className="w-full max-w-[300px] relative">
          <img src={image2} className="image" alt="musk" />
          <div className="bg-white p-4 w-[65%] absolute bottom-[0%] left-0 right-0 mx-auto">
            <h2>Name</h2>
            <p>Role</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Guests
