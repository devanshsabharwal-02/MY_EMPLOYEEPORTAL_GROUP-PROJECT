
import React, { useState } from "react";
import ReactDOM from "react-dom";
import './homescreen.css';
import logo from './FDMEmployeePortal.jpg';
import MainMenu from './MainMenu';

import { BrowserRouter as Router, Navigate, Routes } from 'react-router-dom';






function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "employee1",
      password: "pass123"
    },
    {
      username: "employee2",
      password: "pass123"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    localStorage.setItem("username", userData.username);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true); 
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
 // Generate JSX code for error message
 const renderErrorMessage = (name) =>
 name === errorMessages.name && (
   <div className="error">{errorMessages.message}</div>
 );


// JSX code for login form
const renderForm = (
  
 <div className="form"> 
    <title>Sign In</title>
  
   <form onSubmit={handleSubmit} >
     <div className="input-container">
       <label>Username </label>
       <input type="text" name="uname" required />
       {renderErrorMessage("uname")}
     </div>
     <div className="input-container">
       <label>Password </label>
       <input type="password" name="pass" required />
       {renderErrorMessage("pass")}
     </div>
     <div className="button-container">
       <input type="submit" />
     </div>
   </form>
 </div>
);
return (

  <div className="Login">
    <img src={logo} alt="logo" width={450}  />
   
   <div className="login-form">
    
   {isSubmitted ?  <Router> <a href="/MainMenu"> <button class="enter-portal">Enter Portal</button> </a></Router>  : renderForm}
     
   </div>
 </div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);


export default Login;

