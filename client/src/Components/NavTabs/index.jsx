import { Link, useLocation } from 'react-router-dom';
import '../../Home.css';
import Logo from "../../assets/images/hodge-knives-logo.png";
import InstaLogo from "../../assets/images/instaLogo.png";
import TikTokLogo from '../../assets/images/tiktokLogo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import FBLogo from '../../assets/images/fbLogo.png';
function NavTabs() {

  const currentPage = useLocation().pathname;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-link bg-black">
        <Link to='/'>
          <img src={Logo} alt="Hodge Knives Logo" style={{ width: 200, height: 175 }} />
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
              <NavDropdown.Item className="p-2 text-center" href="/past">Past Knives</NavDropdown.Item>
              <NavDropdown className="text-center process bg-black" title="The Process" id="collapsible-nav-dropdown">
                <NavDropdown.Item className="" href="/process">G10 Build from Drill Bit </NavDropdown.Item>
                <Dropdown.Divider className=''/>

                <NavDropdown.Item className="" href="/ballBearing">Damascus Build from Ball Bearings</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>




          </Nav>

          {/* <Dropdown.Divider className='divider mb-1'/> */}

          <Nav className='mt-1 mx-5'>

            <div className='row'>
              <div className='column' >
              <a href="https://www.facebook.com/profile.php?id=100057059155776">
              <img className='mediaQuery' src={FBLogo} alt="Facebook Logo"
                style={{ width: 50, height: 50 }} />
            </a>
              </div>
              <div className='column' >
              <a href="https://www.instagram.com/hodge.knives/?igsh=dzh2MTEwdWNzdjVm&utm_source=qr&fbclid=IwY2xjawEV4DdleHRuA2FlbQIxMAABHQNw0OaLEoZfVhMFqiR_IlpmMbM9I3eKvABRIOmqhIiZ9tNom-9PR7gSzA_aem_OSo_z-1RS5eq453dOF1oXQ">
              <img className='mediaQuery' src={InstaLogo} alt="Insta Logo"
                style={{ width: 50, height: 50 }} />
            </a>
              </div>
              <div className='column' >
              <a href="https://www.tiktok.com/@hodgeknives/?_r=1&enable_clips=1&utm_campaign=clip_share&fbclid=IwY2xjawEV4FBleHRuA2FlbQIxMAABHbuFyiiQZdgl8-5oQ7bdaWiZMKPdxb63ZyVDmFQtgIeyNzeZntrkjsjomw_aem_t5bwiJO-FEOXogpuRwuBdA">
              <img className='mediaQuery ' src={TikTokLogo} alt="TikTok Logo"
                style={{ width: 55, height: 55 }} />
            </a>
              </div>
            </div>
             

          
          </Nav>
              <Dropdown.Divider className='divider mt-1 mb-4'/>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavTabs;