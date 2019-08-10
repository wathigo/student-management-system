import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'


const Ad = () => {
  return (
<div className="ad-container">
    <h3>STUDENT Arrival/Depature Information For the last 5 Days</h3>

<form>

<table>
  <tr>
    <th>ARRIVAL TIME</th>
    <th>DEPARTURE TIME</th>
    <th>DATE</th>
  </tr>
  <tr>
    <td>08:00AM</td>
    <td>06:00PM</td>
    <td>07/01/2020</td>
  </tr>
  <tr>
    <td>08:00AM</td>
    <td>06:00PM</td>
    <td>06/01/2020</td>
  </tr>
  <tr>
    <td>8:00AM</td>
    <td>06:00PM</td>
    <td>05/01/2020</td>
  </tr>
  <tr>
    <td>8:00AM</td>
    <td>06:00PM</td>
    <td>04/01/2020</td>
  </tr>
  <tr>
    <td>806:00PM</td>
    <td>06:00PM</td>
    <td>03/01/2020</td>
  </tr>
  <tr>
    <td>Nil</td>
    <td>Nil</td>
    <td>03/01/2020</td>
  </tr>
</table>

</form>
<input type="button" value="send report" className="rpt-btn"/>
</div>
  );
}

export default Ad;
