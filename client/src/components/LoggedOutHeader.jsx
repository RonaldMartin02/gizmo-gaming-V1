import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [searchTerm, setsearchTerm] = useState('');
  
  const handleChange = (event) => {
    setsearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
    window.location.href = `/Search/${searchTerm}`;
  };


  return (
    <header className='Header'>
      <div className='Header_Search'>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
          />
          <button className='Header_Search_Btn' onClick={handleSearch}>Search</button>
        </div>
      <div className='Header_GizmoGaming' onClick={() => { window.location.href = "/" }}>Gizmo Gaming</div>
      <div className='Header_Btns'>
        <button onClick={() => { window.location.href = "/Login" }}>Log In</button>
        <button onClick={() => { window.location.href = "/Signup" }}>Sign Up</button>
        <button onClick={() => { window.location.href = "/Aboutus" }}>About Us</button>
      </div>
    </header>
  );
}
