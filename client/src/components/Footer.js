import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button"
import SignupFooter from "./signupFooter"
import { useEffect, useState } from "react";


 const Footer = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);

  return (
    <>
        <div className='m-2 footer-banner signup-discount'>
            <h2>Sign up now and get 10% off on select products! <SignupFooter /></h2>
          </div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Careers</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </>
  );
};
export default Footer;