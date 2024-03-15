import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import './scss/LoggedOutHeader.scss';
export default function Header() {
  const [searchTerm, setsearchTerm] = useState('');
   const [matches, setMatches] = useState(window.matchMedia("(max-width: 1000px)").matches);

  useEffect(() => {
    window.matchMedia("(max-width: 768px)").addListener((e) => {
      setMatches(e.matches);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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



  if (!matches) {
    console.log("rendering logged out header")
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
         <div className='Header_GizmoGaming' onClick={() => { window.location.href = "/" }}>Gizmo Gaming</div>
         <div className='menu-items'>
           <button onClick={() => { window.location.href = "/Login" }}>Log In</button>
           <button onClick={() => { window.location.href = "/Signup" }}>Sign Up</button>
           <button onClick={() => { window.location.href = "/Aboutus" }}>About Us</button>
           </div>
           </header>
           ) 
  } else {
    console.log("rendering logged out header Modile")
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
          <button onClick={() => { window.location.href = "/Login" }}>Log In</button>
           <button onClick={() => { window.location.href = "/Signup" }}>Sign Up</button>
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
)
}

}
