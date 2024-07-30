import Logo from "../../assets/images/SJe.png";
import { Button, Col, Row } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="d-block p-5">
      <div className="">
        <Row className="">
          <Col>
  
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
