import React from "react";
import '../App.css';
import ResponsiveMenu from 'react-responsive-navbar';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import Helmet from "react-helmet";

const Menu = styled.div`
  border-bottom: 1px solid white;
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: none;
    font-size: 16px;
    color: #6e6d6d;
    &:hover {
      color: white;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

const NavBar = () => (
    <div className='header-bar'>
        <Helmet titleTemplate="Covid Aggregator" defaultTitle="Covid Aggregator" />
        <div  className='title'>COVID AGGREGATOR</div>
        <ResponsiveMenu
          menuOpenButton={<FaBars size={30} color="#6e6d6d" />}
          menuCloseButton={<FaRegWindowClose size={30} color="#6e6d6d" />}
          changeMenuOn="768px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <Menu>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Worldometer">Worldometer</Link>
                </li>
                <li>
                    <a href="https://www.mohfw.gov.in/" target="_blank" rel="noopener noreferrer">Ministry Of Healthpower</a>
                </li>
                <li>
                  <Link to="/covid19-india-org">Covid-19 Tracker</Link>
                </li>
                <li>
                  <Link to="/WHO">WHO Official</Link>
                </li>
                <li>
                  <Link to="/who-dashboard">WHO Dashboard</Link>
                </li>
                <li>
                  <Link to="/covid-india-org">Covid India</Link>
                </li>
                <li>
                <a href="http://covidindiaupdates.in/" target="_blank" rel="noopener noreferrer">Covid India Updates</a>
                </li>
              </ul>
            </Menu>
          }
        />
    </div>
);

export default NavBar;
