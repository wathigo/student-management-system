import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import Nav from './Nav'


const Fees = () => {
  return (
<div className="fee-container">
    <h3>STUDENT Fees Information</h3>

<form>

<table align="center" cellpadding = "10">

<tr>
<td>FIRST NAME</td>
<td><input type="text" name="First_Name" maxlength="30" value="Simon"/>
</td>
</tr>

<tr>
<td>LAST NAME</td>
<td><input type="text" name="Last_Name" maxlength="30" value="Kemboi" />
</td>
</tr>

<tr>
<td>EMAIL ID</td>
<td><input type="text" name="Email_Id" maxlength="100" value="kemboi@example.org"/></td>
</tr>

<tr>
<td>GENDER</td>
<td>
Male <input type="radio" name="Gender" value="Male" checked="checked" />
Female <input type="radio" name="Gender" value="Female" />
</td>
</tr>


<tr>
<td>FEES INFORMATION <br /><br /><br /><br /><br /><br /><br /></td>

<td>
<table>

<tr>
<td align="center"><b>Term</b></td>
<td align="center"><b></b></td>
<td align="center"><b>Total Fees</b></td>
<td align="center"><b>Fees paid</b></td>
<td align="center"><b>Fees balance</b></td>
</tr>

<tr>
<td>1</td>
<td>Term 1</td>
<td><input type="text" name="ClassX_Board" maxlength="30" value="30,000" /></td>
<td><input type="text" name="ClassX_Percentage" maxlength="30" value="25,000" /></td>
<td><input type="text" name="ClassX_YrOfPassing" maxlength="30" value="5,000" /></td>
</tr>

<tr>
<td>2</td>
<td>Term 2</td>
<td><input type="text" name="ClassXII_Board" maxlength="30" value="18,000" /></td>
<td><input type="text" name="ClassXII_Percentage" maxlength="30" value="10,000" /></td>
<td><input type="text" name="ClassXII_YrOfPassing" maxlength="30" value="8,000" /></td>
</tr>

<tr>
<td>3</td>
<td>Term 3</td>
<td><input type="text" name="Graduation_Board" maxlength="30" value="10,000" /></td>
<td><input type="text" name="Graduation_Percentage" maxlength="30" value="5,000" /></td>
<td><input type="text" name="Graduation_YrOfPassing" maxlength="30" value="5,000" /></td>
</tr>

</table>

</td>
</tr>
</table>

</form>
<input type="button" value="send report" className="rpt-btn"/>
</div>
  );
}

export default Fees;
