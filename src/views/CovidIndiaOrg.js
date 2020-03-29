import React from "react";
import '../App.css';
import Iframe from 'react-iframe';
import NavBar from './NavBar';

const CovidIndiaOrg = () => (
    <div>
        <NavBar />
        <div  className='title'>
            Source:
            <a href="https://www.covidindia.org/" target="_blank" rel="noopener noreferrer">COVIDIndia.org</a>
        </div>
        <div className="App">
            <Iframe url="https://www.covidindia.org/"
                width="100%"
                height="100%"
                id="covid-india-org"
                className="IFrame-Container"
                display="initial"
                position="relative" />
        </div>
    </div>
);

export default CovidIndiaOrg;
