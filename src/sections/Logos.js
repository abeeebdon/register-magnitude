import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../images/IMG-20240411-WA0013.jpg'
import image2 from '../images/CIT.jpg'
import image3 from '../images/IMG-20240411-WA0014.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'black',
      }}
      onClick={onClick}
    />
  )
}
const Logos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <section className="w-[86%] mx-auto max-w-[580px]">
      <Slider {...settings}>
        <div className="logo">
          <img src={image1} alt="img1" className="image-logo" />
        </div>
        <div className="logo">
          <img src={image2} alt="img2" className="image-logo" />
        </div>
        <div className="logo">
          <img src={image3} alt="img3" className="image-logo" />
        </div>
      </Slider>
    </section>
  )
}

export default Logos
