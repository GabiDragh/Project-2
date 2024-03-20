import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Footer from './Footer';
import Hero from './Hero';
import Footer1 from './Footer1';
import Navbar from './Navbar/Navbar';
// import SimpleSlider from "./components/Footer";

const Home = () => (
    <>
        <Navbar/>
        <Hero/>
        <Footer/>
        <Footer1/>
    </>
);

export default Home;