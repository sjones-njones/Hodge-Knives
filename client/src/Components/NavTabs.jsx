import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/images/hodge-knives-logo.png";
function NavTabs() {
  const currentPage = useLocation().pathname;
  return (
    <>
    <img src={Logo} alt="Hodge Knives Logo" style={{ width: 200, height: 200 }} />    
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Shop"
          className={currentPage === '/Shop' ? 'nav-link active' : 'nav-link'}
          >
          Shop
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Care"
          className={currentPage === '/Care' ? 'nav-link active' : 'nav-link'}
          >
          Knife Care
        </Link>
      </li>
    </ul>
          </>
  );
}

export default NavTabs;