import React from 'react';
import logo from '../images/students.png'


const Nav = (props) => {
  return (
    <div className="nav">
      <figure className="fl-left logo">
        <img src={logo} alt="log0"/>
      </figure>
      <span className="cl-white nav-header"> Logged in as Admin: k09-5039-2783 </span>
    </div>
  );
}

export default Nav;
