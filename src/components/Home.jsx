import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';
import Footer1 from './Footer1';
// import Weather from '../assets/utils/Weather';
// import SimpleSlider from "./components/Footer";

const Home = () => (
    <>
        <Navbar/>
        {/* <Weather/> */}
        <Hero/>
        <Footer/>
        <Footer1/>
       
    </>
);

export default Home;
