import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoSlider.css';  // Custom CSS for additional styling

const LogoSlider = () => {
    const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 5, // Adjust based on the number of logos visible at once
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      pauseOnHover: false,
    };
  
    const logos = [
      // Array of logo URLs or paths
      'logo1.png',
      'logo2.png',
      'logo3.png',
      'logo4.png',
      'logo5.png',
      'logo6.png',
      // Add more logos as needed
    ];
  
    return (
      <div className="logo-slider">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default LogoSlider;  