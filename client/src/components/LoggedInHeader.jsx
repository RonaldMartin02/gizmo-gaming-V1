
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const currentPage = useLocation().pathname;
    return (
      <header>
     <input type="text" />
        <h2>Gizmo Gaming</h2>
        <button>New Post</button>
        <button>Sign Out</button>
      </header>
    );
  }
  