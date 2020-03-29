import React from "react";
import '../App.css';
import Iframe from 'react-iframe';
import NavBar from './NavBar';

const CovidIndiaUpdates = () => (
    <div>
        <NavBar />
        <div  className='title'>
            Source:
            <a href="http://covidindiaupdates.in/" target="_blank" rel="noopener noreferrer">Covid 19 Resource Center</a>
        </div>
        <div className="App">
            <Iframe url="http://covidindiaupdates.in/"
                width="100%"
                height="100%"
                id="covid-india-updates"
                className="IFrame-Container"
                display="initial"
                position="relative" />
        </div>
    </div>
);

export default CovidIndiaUpdates;
