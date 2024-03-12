import { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { useLocation } from 'react-router-dom';
import './scss/LoggedInHeader.scss';

export default function Header() {
  const [searchTerm, setsearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    window.matchMedia("(max-width: 768px)").addListener((e) => {
      setMatches(e.matches);
    });
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const handleLogOut = () => {
    Auth.logout()
  }

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

  const currentPage = useLocation().pathname;

  if (currentPage === "/Build/Create") {
    if (!matches) {
      return (
        <header className='Header'>
          <div className='Header_Search' />
          <div className='Header_GizmoGaming' onClick={() => { window.location.href = "/" }}>Gizmo Gaming</div>
          <div className='Header_Btns'>
            <button onClick={() => { window.location.href = "/" }}>Home</button>
            <button onClick={handleLogOut}>Sign Out</button>
            <button onClick={() => { window.location.href = "/Aboutus" }}>About Us</button>
          </div>
        </header>
      );
    } else {
      return (
        <header className='Header'>
          
          <div className='Header_Search' />
          <div className='Header_GizmoGaming' onClick={() => { window.location.href = "/" }}>Gizmo Gaming</div>
          <div className='Header_Nav' >
            <div className='Header_NavGizmoGaming' onClick={() => { window.location.href = "/" }}>Gizmo Gaming</div>
          <button onClick={toggleMenu} className="menu-button">
          &#9776; {/* Hamburger Icon */}
        </button>
          </div>
          <div className='Header_Btns'>
        {isOpen && (
          <div className="menu-items">
            <button onClick={() => { window.location.href = '/' }}>Home</button>
            <button onClick={handleLogOut}>Sign Out</button>
            <button onClick={() => { window.location.href = '/Aboutus' }}>About Us</button>
            {currentPage !== '/Build/Create' && (
              <button onClick={() => { window.location.href = '/Build/Create' }}>New Post</button>
            )}
          </div>
        )
        }
          </div>
          
          </header>
      );
    }
  } else { if (!matches) {
    return (
      <header className='Header'>
        <div className='Header_Search'>
          <input
            className='Header_Search_Input'
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
          />
          <button className='Header_Search_Btn' onClick={handleSearch}>Search</button>
        </div>
        <div className='Header_Btns'>
          <button onClick={() => { window.location.href = "/Build/Create" }}>New Post</button>
          <button onClick={handleLogOut}>Sign Out</button>
          <button onClick={() => { window.location.href = "/Aboutus" }}>About Us</button>
        </div>
      </header>
    );
  }
  else {
    return (
      <header className='Header'>
       <div className='Header_Nav' >
            <h1 className='Header_GizmoGaming'  onClick={() => { window.location.href = "/" }}>Gizmo Gaming</h1>
          <button onClick={toggleMenu} className="menu-button">
          &#9776; {/* Hamburger Icon */}
        </button>
          </div>
        <div className='Header_Btns'>
        {isOpen && (
          <div className="menu-items">
            <button onClick={() => { window.location.href = '/Build/Create' }}>New Post</button>
            <button onClick={handleLogOut}>Sign Out</button>
            <button onClick={() => { window.location.href = '/Aboutus' }}>About Us</button>
          </div>
        )
        }
        </div>
        <div className='Header_Search'>
          <input
            className='Header_Search_Input'
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
          />
          <button className='Header_Search_Btn' onClick={handleSearch}>Search</button>
        </div>
      </header>
    );
}
}
}
