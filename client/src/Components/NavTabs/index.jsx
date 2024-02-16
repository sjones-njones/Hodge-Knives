import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/images/hodge-knives-logo.png";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavTabs() {
  const currentPage = useLocation().pathname;
  return (


    // <>
    // <Link to='/'>
    // <img src={Logo} alt="Hodge Knives Logo" style={{ width: 200, height: 200 }} />    
    //     </Link>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link
    //       to="/"
    //       className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Home
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/About"
    //       className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Contact"
    //       className= {currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Shop"
    //       className={currentPage === '/Shop' ? 'nav-link active' : 'nav-link'}
    //       >
    //       Shop
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Past"
    //       className={currentPage === '/Past' ? 'nav-link active' : 'nav-link'}
    //       >
    //       Past Knives
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Care"
    //       className={currentPage === '/Care' ? 'nav-link active' : 'nav-link'}
    //       >
    //       Knife Care
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Admin"
    //       className={currentPage === '/Admin' ? 'nav-link active' : 'nav-link'}
    //       >Admin
    //               </Link>
    //   </li>
    //     </ul>
    //       </>
<>

    <Navbar collapseOnSelect expand="lg" className="nav-link bg-black">
      <Container>
          <Link to='/'>
            <img src={Logo} alt="Hodge Knives Logo" style={{ width: 200, height: 200 }} />
          </Link>
        <Navbar.Brand className="">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="bg-black" id="responsive-navbar-nav">
          <Nav className="nav-tabs me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link className={currentPage === '/About' ? 'nav-link active' : 'nav-link'} href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/care">Knife Care</Nav.Link>
            <NavDropdown className="bg-black" title="Pictures" id="collapsible-nav-dropdown">
              <NavDropdown.Item className="" href="/past">Past Knives</NavDropdown.Item>
              <NavDropdown.Item className=" " href="/forge">The Blacksmith's Forge
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#/admin">Admin</Nav.Link>
            <Nav.Link href="#/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavTabs;