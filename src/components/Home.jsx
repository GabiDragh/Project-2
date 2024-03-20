import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';
import Weather from '../assets/utils/Weather';
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