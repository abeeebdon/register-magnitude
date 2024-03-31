import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../images/LASG.jpeg'
import image2 from '../images/nigeria.jpeg'

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
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <section className="w-[80%] max-w-[900px] mx-auto m-4 p-4">
      <Slider {...settings}>
        <div className="w-full max-w-[250px]">
          <img src={image1} alt="img1" className="image" />
        </div>
        <div className="w-full max-w-[250px]">
          <img src={image2} alt="img1" className="image" />
        </div>
        <div className="w-full max-w-[250px]">
          <img src={image2} alt="img1" className="image" />
        </div>
        <div className="w-full max-w-[250px]">
          <img src={image1} alt="img1" className="image" />
        </div>
        <div className="w-full max-w-[250px]">
          <img src={image2} alt="img1" className="image" />
        </div>
      </Slider>
    </section>
  )
}

export default Logos
