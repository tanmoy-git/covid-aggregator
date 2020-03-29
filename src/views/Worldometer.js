import React from "react";
import '../App.css';
import Iframe from 'react-iframe';
import NavBar from './NavBar';

const Worldometer = () => (
<div>
    <NavBar />
    <div  className='title'>
        Source:
        <a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noopener noreferrer">Worldometer COVID-19 Pandemic</a>
    </div>
  <div className="App">
  <Iframe url="https://www.worldometers.info/coronavirus/"
    width="100%"
    height="100%"
    id="worldometer"
    className="IFrame-Container"
    display="initial"
    position="relative"/>
    </div>
</div>
);

export default Worldometer;
