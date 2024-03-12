import { useState } from 'react';
import Auth from '../utils/auth';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleLogOut = () => {
    Auth.logout()
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    console.log(event.target.value);
  };

  const handleSearch = () => {
    // Perform the search action here
    window.location.href = `/Search/${searchTerm}`;
  };

  const currentPage = useLocation().pathname;
  if (currentPage === "/Build/Create") {
    return (
      <header>
        <h2 className='GizmoGaming' onClick={()=>{window.location.href = "/"}}>Gizmo Gaming</h2>
        <div>
          <button onClick={()=>{window.location.href = "/"}}>Home</button>
          <button onClick={handleLogOut}>Sign Out</button>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className='search'>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
          />
          <button className='search_btn' onClick={handleSearch}>Search</button>
        </div>
        <h2 className='GizmoGaming' onClick={()=>{window.location.href = "/"}}>Gizmo Gaming</h2>
        <div>
          <button onClick={()=>{window.location.href = "./Build/Create"}}>New Post</button>
          <button onClick={handleLogOut}>Sign Out</button>
        </div>
        <button onClick={()=>{window.location.href = "./Aboutus"}}>About Us</button>
      </header>
    );
  }
}
