import React from 'react';
import Auth from '../utils/auth';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  
  const handleLogOut = () => {
    Auth.logout()
  }
    return (
    <header >
     <input type="text" />
        <h2>Gizmo Gaming</h2>
        <div>
        <button onClick={()=>{console.log("Login")}}>Log In</button>
        <button  onClick={()=>{console.log("SignUp")}}>Sign Up</button>
        <button onClick={handleLogOut}>About Us</button>
        </div>
      </header>
    );
  }
  