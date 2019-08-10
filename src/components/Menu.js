import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import Nav from './Nav'


const Menu = () => {
  return (
    <div className="menu-container">
    <Nav/>
    <div className="menu">
      <div className="menu-items">
        <p><a href="/feesInfo">Fees Info</a></p>
      </div>
      <div className="menu-items">
        <p><a href="./perfomanceInfo">Student Perfomance</a></p>
      </div>
      <div className="menu-items">
        <p><a href='adInfo'>Arrival/Departure Info</a></p>
      </div>
    </div>
    </div>
  );
}

export default Menu;
