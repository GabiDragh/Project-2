import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Cards from './Cards';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';
import Footer1 from './Footer1';
import Weather from '../assets/utils/Weather';


const Home = () => (
    <>
        <Navbar/>
        <Weather/>
        <Hero/>
        <Cards/>
        <Footer1/>
       
    </>
);

export default Home;
