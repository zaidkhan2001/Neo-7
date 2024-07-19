import React from 'react';
import CarouselComponent from '../Components/carousel';
import Footer from '../Components/footer';
import MultipleCard from '../Components/multiplecard';
import LogoSlider from '../Components/logoslider';

const Home = () => {
    return (
      <div>
      <CarouselComponent/>
      <MultipleCard/>
      <LogoSlider/>
      <Footer/>  
      </div>
    );
};

export default Home;