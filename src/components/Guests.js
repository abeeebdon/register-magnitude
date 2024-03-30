import image1 from '../images/atiku.jpg'
import image2 from '../images/Elon Musk.jpg'
import image3 from '../images/mark.jpg'
const Guests = () => {
  return (
    <article className="flex w-full">
      <div>
        <img src={image1} className="image" alt="elon" />
      </div>
      <div>
        <img src={image2} className="image" alt="musk" />
      </div>
      <div>
        <img src={image3} className="image" alt="elon" />
      </div>
      <div>
        <img src={image3} className="image" alt="ell " />
      </div>
    </article>
  )
}

export default Guests
