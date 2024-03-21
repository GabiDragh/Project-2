import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Cards from './Cards';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';
import Weather from '../assets/utils/Weather';
import Footer from './Footer';
// import SimpleSlider from "./components/Footer";

const Home = () => (
    <>
        <Navbar/>
        {/* <Weather/> */}
        <Hero/>
        <Cards/>
        <Footer1/>
       
    </>
);

export default Home;
