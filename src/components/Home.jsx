import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';
import Weather from '../assets/utils/Weather';
import Footer from './Footer';
// import SimpleSlider from "./components/Footer";

const Home = () => (
    <>
        <Navbar/>
        <Weather/>
        <Hero/>
        <Footer/>
       
    </>
);

export default Home;
