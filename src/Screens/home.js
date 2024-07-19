import React from 'react';
import CustomNavbar from '../Components/navbar';
import CarouselComponent from '../Components/carousel';
import Footer from '../Components/footer';
import MultipleCard from '../Components/multiplecard';
import LogoSlider from '../Components/logoslider';

const Home = () => {
    return (
      <div>
      <CustomNavbar/>
      <CarouselComponent/>
      <MultipleCard/>
      <LogoSlider/>
      <Footer/>  
      </div>
    );
};

export default Home;