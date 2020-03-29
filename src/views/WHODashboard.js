import React from "react";
import '../App.css';
import Iframe from 'react-iframe';
import NavBar from './NavBar';

const WHODashboard = () => (
<div>
    <NavBar />
    <div  className='title'>
        Source:
        <a href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd" target="_blank" rel="noopener noreferrer">WHO Official Website</a>
    </div>
    <div className="App">
    <Iframe url="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd"
        width="100%"
        height="100%"
        id="who-dashboard"
        className="IFrame-Container"
        display="initial"
        position="relative"/>
        </div>
</div>
);

export default WHODashboard;
