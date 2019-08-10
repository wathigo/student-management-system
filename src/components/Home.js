import React from 'react';
import Students from './Students'
import Nav from './Nav'
import SideNav from './SideNav'

const Home = () => {
  return (
    <div id="page-wrap">
    <main id="home" className="home">
      <Nav/>
      <Students/>
    </main>
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"home"}/>
    </div>
  );
}

export default Home;
