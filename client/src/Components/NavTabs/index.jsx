import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/images/hodge-knives-logo.png";
import Container from 'react-bootstrap/Container';
import FacebookLogo from "../../assets/images/facebookLogoWhite2.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavTabs() {

  const currentPage = useLocation().pathname;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-link bg-black">
          <Link to='/'>
            <img src={Logo} alt="Hodge Knives Logo" style={{ width: 200, height: 200 }} />
          </Link>
          <Navbar.Brand className="">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="bg-black toggle" id="responsive-navbar-nav">
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
            <Nav className='mx-5'>
            <a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=100057059155776"><p className="mt-4 mx-3 text-warning my-auto fs-5">
        Follow us on Facebook
        </p></a>

        <a href="https://www.facebook.com/profile.php?id=100057059155776">
          <img className='' src={FacebookLogo} alt="Facebook Logo"
            style={{ width: 70, height: 70 }} />
        </a>
              {/* <Nav.Link className='' href="/forge">Cart</Nav.Link> */}
              {/* <Nav.Link href="/login">Login</Nav.Link> */}
              {/* <Nav.Link className='text-black' href="/admin">Admin</Nav.Link> */}
            </Nav>
            
          </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavTabs;