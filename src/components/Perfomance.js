import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'


const Perfomance = () => {
  return (
<div className="perfomance-container">
    <h3>STUDENT Perfomance Information</h3>

<form>

<table align="center" cellpadding = "10">

<tr>
<td>FIRST NAME</td>
<td><input type="text" name="First_Name" value="Simon"/>
</td>
</tr>

<tr>
<td>LAST NAME</td>
<td><input type="text" name="Last_Name" value="Kemboi" />
</td>
</tr>

<tr>
<td>EMAIL ID</td>
<td><input type="text" name="Email_Id" value="kemboi@example.org"/></td>
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
<td align="center"><b>Grade</b></td>
</tr>

<tr>
<td>1</td>
<td>Term 1</td>
<td><input type="text" name="ClassX_Board" value="B+" /></td>
</tr>

<tr>
<td>2</td>
<td>Term 2</td>
<td><input type="text" name="ClassXII_Board" value="A" /></td>
</tr>

<tr>
<td>3</td>
<td>Term 3</td>
<td><input type="text" name="Graduation_Board" value="A" /></td>
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

export default Perfomance;
