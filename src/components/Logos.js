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
    responsiveness: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <section className="w-[70%] mx-auto max-w-[650px]">
      <Slider {...settings}>
        <div className="logo">
          <img src={image1} alt="img1" className="image" />
        </div>
        <div className="logo">
          <img src={image2} alt="img1" className="image" />
        </div>
        <div className="logo">
          <img src={image2} alt="img1" className="image" />
        </div>
        <div className="logo">
          <img src={image1} alt="img1" className="image" />
        </div>
        <div className="logo">
          <img src={image2} alt="img1" className="image" />
        </div>
      </Slider>
    </section>
  )
}

export default Logos
