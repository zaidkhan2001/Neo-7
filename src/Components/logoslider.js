import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoSlider.css';  // Custom CSS for additional styling
import TextContainer from './textcontainer';

const LogoSlider = () => {
    const settings = {
      infinite: true,
      speed: 4000,
      slidesToShow: 5, // Adjust based on the number of logos visible at once
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      pauseOnHover: false,
    };
  
    const logos = [
      // Array of logo URLs or paths
      'Assets/Logo1.png',
      'Assets/Logo2.png',
      'Assets/Logo3.png',
      'Assets/Logo4.jpg',
      'Assets/Logo5.jpg',
      // Add more logos as needed
    ];
  
    return (
      <div>
      <TextContainer text="Our Certifications"/>
      <div className="logo-slider">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      </div>
    );
  };
  
  export default LogoSlider;  