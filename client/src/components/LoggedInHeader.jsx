import Auth from '../utils/auth';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const handleLogOut = () => {
    Auth.logout()
  }
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
    )} else 

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
  