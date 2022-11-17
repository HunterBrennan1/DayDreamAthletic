import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AOS from "aos";
import Login from '../assets/img/loginicon.svg'
import Cart from '../assets/img/iconmonstr-shopping-bag-4.svg'
import "aos/dist/aos.css";

AOS.init();

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <header>
      <div className="top-banner">
        <h1 className="discount-title">FREE SHIPPING</h1>
        <a href="#">ON ORDERS $19+</a>
      </div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="logo">Day-Dream-Athletic</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="nav-collapse">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            {/* <div className="form-social-container"> */}
            <div className="search-form-container">
              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 search-form"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="search-btn">Search</Button>
              </Form>
            </div>
            <div className="nav-login-out">
              <img src={Cart} className="nav-btn-icons"></img>
              <img src={Login} className="nav-btn-icons"></img>
            </div>
            {/* </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};


