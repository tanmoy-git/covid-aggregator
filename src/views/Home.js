import React from "react";
import '../App.css';
import Iframe from 'react-iframe';
import NavBar from './NavBar';

const Home = () => (
<div>
    <NavBar />
    <div  className='title'>
        Source:
        <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank" rel="noopener noreferrer">John Hopkins Global Dashboard of Covid-19</a>
    </div>
  <div className="App">
  <Iframe url="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
    width="100%"
    height="100%"
    id="john-hopkins"
    className="IFrame-Container"
    display="initial"
    position="relative"/>
    </div>
</div>
);

export default Home;
