import React from 'react';
import Auth from '../utils/auth';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const handleLogOut = () => {
    Auth.logout()
  }
  const currentPage = useLocation().pathname;
    return (
      <header>
     <input type="text" />
        <h2>Gizmo Gaming</h2>
          <button onClick={()=>{console.log("newPost")}}>New Post</button>
        <button onClick={handleLogOut}>Sign Out</button>
      </header>
    );
  }
  