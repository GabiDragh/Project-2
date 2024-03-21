import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Cards from './Cards';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';
import Weather from '../assets/utils/Weather';
import Footer from './Footer';
import { SharedProvider } from '../SharedContext';
// import SimpleSlider from "./components/Footer";

const Home = () => (
    <>
    <SharedProvider>
        <Navbar/>
        <Hero/>
        {/* <Cards/> */}
        <Weather/>
        <Footer/>
        </SharedProvider>   
    </>
);

export default Home;
