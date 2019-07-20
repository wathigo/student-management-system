import React from 'react';
import logo from '../images/students.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className="nav">
      <figure className="fl-left logo">
        <img src={logo} alt="log0"/>
      </figure>
      <span className="cl-white nav-header"> Logged in as Admin: k09-5039-2783 </span>
      <input type="text" placeholder="search" className="fl-right"/>
      <span className='power'> <FontAwesomeIcon className="power-btn" icon={faPowerOff}/></span>
    </div>
  );
}

export default Nav;
