import React from 'react';
import Auth from '../utils/auth';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {

    return (
    <header >
      <div>
     <input type="text"/>
     <button>Search</button>
      </div>
        <h2 className='GizmoGaming'onClick={()=>{window.location.href = "/"}}>Gizmo Gaming</h2>
        <div>
        <button onClick={()=>{window.location.href = "./Login"}}>Log In</button>
        <button  onClick={()=>{window.location.href = "./Signup"}}>Sign Up</button>
        <button onClick={()=>{window.location.href = "./Aboutus"}}>About Us</button>
        </div>
      </header>
    );
  }
  