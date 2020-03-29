import React from "react";
import '../App.css';
import Iframe from 'react-iframe';
import NavBar from './NavBar';

const Covid19IndiaOrg = () => (
    <div>
        <NavBar />
        <div  className='title'>
            Source:
            <a href="https://www.covid19india.org/"target="_blank" rel="noopener noreferrer">India Covid 19 Tracker</a>
        </div>
        <div className="App">
            <Iframe url="https://www.covid19india.org/"
                width="100%"
                height="100%"
                id="covid19-india-org"
                className="IFrame-Container"
                display="initial"
                position="relative" />
        </div>
    </div>

);

export default Covid19IndiaOrg;
