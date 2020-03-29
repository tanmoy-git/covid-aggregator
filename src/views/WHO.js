import React from "react";
import '../App.css';
import Iframe from 'react-iframe';
import NavBar from './NavBar';

const WHO = () => (
<div>
    <NavBar />
    <div  className='title'>
        Source:
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel="noopener noreferrer">WHO Official Website</a>
    </div>
    <div className="App">
    <Iframe url="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        width="100%"
        height="100%"
        id="who"
        className="IFrame-Container"
        display="initial"
        position="relative"/>
        </div>
</div>
);

export default WHO;
