import React from 'react';
import About from '../../Components/About';
import CallToAction from '../../Components/CallToAction';
import Header from '../../Components/Header';
import MainStores from '../../Components/MainStores';
import MadedBy from '../../Components/MadedBy';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import "./style.css"
import OurSolutions from '../../Components/OurSolutions';

function App() {
  return (
    <>
      <Header/>
      <CallToAction/>
      <MainStores/>
      <OurSolutions/> 
      <About/>
      <MadedBy/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
