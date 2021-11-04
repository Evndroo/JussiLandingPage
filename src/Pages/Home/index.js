import React from 'react';
import About from '../../Components/About';
import CallToAction from '../../Components/CallToAction';
import Header from '../../Components/Header';
import MainStores from '../../Components/MainStores';
import "./style.css"

function App() {
  return (
    <>
      <Header/>
      <CallToAction/>
      <MainStores/>
      <About/>
    </>
  );
}

export default App;
