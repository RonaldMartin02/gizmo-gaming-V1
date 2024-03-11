import React from 'react';
import Auth from '../utils/auth';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const handleLogOut = () => {
    Auth.logout()
  }
    return (
      <header>
       <div>
     <input type="text"/>
     <button>Search</button>
      </div>
        <h2 className='GizmoGaming' onClick={()=>{window.location.href = "/"}}>Gizmo Gaming</h2>
        <div>
          <button onClick={()=>{window.location.href = "./Build/Create"}}>New Post</button>
        <button onClick={handleLogOut}>Sign Out</button>
      </div>
      </header>
    );
  }
  