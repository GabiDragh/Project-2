import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';

const Home = () => (
    <>
        <Navbar/>
        <Hero/>
        <Footer/>
    </>
);

export default Home;