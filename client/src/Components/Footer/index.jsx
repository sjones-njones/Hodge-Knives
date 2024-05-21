import Logo from "../../assets/images/SJe.png";
import { Button, Col, Row } from 'react-bootstrap';
import FacebookLogo from "../../assets/images/facebookLogoWhite2.png"
const Footer = () => {
  return (
    <footer className="d-block p-5">
      <div className="">
        <Row className="">
          <Col>
          {/* <Col className="text-end">
        <p className="text-secondary">
        Follow us on Facebook
        </p>

</Col> */}
{/* <Col className="text-start">
        <a href="https://www.facebook.com/profile.php?id=100057059155776">
          <img className='' src={FacebookLogo} alt="Facebook Logo"
            style={{ width: 45, height: 45 }} />
        </a>
        

</Col> */}
</Col>
          <Col className="">
            <img src={Logo} alt="SJ Designs" style={{ width: 200, height: 200 }} />
          </Col>
          <Col></Col>
        </Row>
      </div>

    </footer>
  );
};

export default Footer;
