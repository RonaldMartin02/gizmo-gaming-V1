
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const currentPage = useLocation().pathname;
    return (
      
      <header>
        <p>Ronald's {currentPage.replace('/','')} of Wonders</p>
      </header>
    );
  }
  