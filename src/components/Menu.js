import React from 'react';
import Nav from './Nav'

const App = () => {
  return (
    <div className="menu-container">
    <Nav/>
    <div className="menu">
      <div className="menu-item">
        Fees Info
      </div>
      <div className="menu-item">
        Student Perfomance
      </div>
      <div className="menu-item">
        Units Taken
      </div>
    </div>
    </div>
  );
}

export default App;
