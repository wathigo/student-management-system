import React from 'react';
import logo from '../images/students.png'

const Nav = () => {
  return (
    <div className="nav">
      <figure className="fl-left logo">
        <img src={logo} alt="log0"/>
      </figure>
      <input type="text" placeholder="search" className="fl-right"/>
    </div>
  );
}

export default Nav;
