import React from 'react';
import logo from '../images/students.png'

const Login = () => {
  return (
    <div className="login">
      <figure>
        <img src={logo}/>
      </figure>
      <form>
        <span>Email: </span><input type="email" name="user[email]" />
        <div className="newline"></div>
        <span>Password: </span><input type="password" name="user[password]" />
        <div className="newline"></div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
