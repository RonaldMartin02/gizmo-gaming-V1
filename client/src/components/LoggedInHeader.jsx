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
  };

  const handleSearch = () => {
    // Perform the search action here
    // You can redirect to the search results page or handle the search logic
    // For example, redirecting to a search results page:
    window.location.href = `/search?term=${searchTerm}`;
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
      </header>
    );
  }
}
