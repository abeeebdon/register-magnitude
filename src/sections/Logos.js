import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../images/IMG-20240411-WA0013.jpg'
import image2 from '../images/CIT.jpg'
import image3 from '../images/IMG-20240411-WA0014.jpg'
import image4 from '../images/experts.jpeg'

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
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="w-[86%] mx-auto pb-8">
      <Slider {...settings}>
        <div className="logo">
          <img src={image3} alt="img3" className="image-logo" />
        </div>

        <div className="logo">
          <img src={image2} alt="img2" className="image-logo" />
        </div>
        <div className="logo">
          <img src={image1} alt="img1" className="image-logo" />
        </div>
        <div className="logo">
          <img src={image4} alt="star" className="image-logo" />
        </div>
        <div className="logo">
          <img src={image1} alt="img1" className="image-logo" />
        </div>
        <div className="logo">
          <img src={image4} alt="img1" className="image-logo" />
        </div>
      </Slider>
    </section>
  )
}

export default Logos
