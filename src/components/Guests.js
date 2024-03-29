import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../images/atiku.jpg'
import image2 from '../images/Elon Musk.jpg'
import image3 from '../images/mark.jpg'
const Guests = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={image1} className="image" />
        </div>
        <div>
          <img src={image2} className="image" />
        </div>
        <div>
          <img src={image2} className="image" />
        </div>
        <div>
          <img src={image3} className="image" />
        </div>
      </Slider>
    </div>
  )
}

export default Guests
