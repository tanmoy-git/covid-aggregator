import React from "react";
import '../App.css';
import NavBar from './NavBar';

const MOH = () => (
    <div>
        <NavBar />
        <div  className='title'>
            Source:
            <a href="https://mohfw.gov.in/" target="_blank" rel="noopener noreferrer">Ministry Of Healthcare India Official Website</a>
        </div>
        <div className="App">
        </div>
    </div>
);

export default MOH;
