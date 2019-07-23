import React from 'react';
import Nav from './Nav'

const App = () => {
  return (
    <div className="menu-container">
    <Nav/>
    <div className="menu">
      <div className="menu-item">
        <p>Fees Info</p>
      </div>
      <div className="menu-item">
        <p>Student Perfomance</p>
      </div>
      <div className="menu-item">
        <p>Units Taken</p>
      </div>
    </div>
    </div>
  );
}

export default App;
