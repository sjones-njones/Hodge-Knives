// src/ImageSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Home.css';
const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
    mobileFirst:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          mobileFirst:true,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: 'linear',
          variableWidth: true,
          adaptiveHeight: true,
          centerMode: true,
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 577,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: 'linear',
          variableWidth: true,
          adaptiveHeight: true,
          arrows: false,
          mobileFirst:true,
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;