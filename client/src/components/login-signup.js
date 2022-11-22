import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState } from 'react';
import Login from '../assets/img/loginicon.svg'
import Form from 'react-bootstrap/Form';

function LoginSignup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary login-icon-modal" onClick={handleShow}>
        <img src={Login} className="nav-btn-icons"></img>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <div className='signup-info'>
          <h2>YOUR DAY DREAM CLUB BENEFITS AWAIT!</h2>
        </div>
        <div className='signup-discount'>
          <p>Sign up now and get 10% off on select products!</p>
        </div>

        <div className='modal-login-signup-form-container'>
          <div>
            <Modal.Header>
              <Modal.Title>LOGIN</Modal.Title>

            </Modal.Header>
            <Modal.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Email"
                  className="me-2 modal-login-signup-form "
                  aria-label="Search"
                />
              </Form>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Password"
                  className="me-2 modal-login-signup-form "
                  aria-label="Search"
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary modal-bottom-btn">SUBMIT</Button>
            </Modal.Footer>
          </div>
          <div>
            <Modal.Header closeButton>
              <Modal.Title className='signup-title-modal'>SIGN UP</Modal.Title>

            </Modal.Header>
            <Modal.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Email"
                  className="me-2 modal-login-signup-form "
                  aria-label="Search"
                />
              </Form>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Password"
                  className="me-2 modal-login-signup-form "
                  aria-label="Search"
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary modal-bottom-btn">SUBMIT</Button>
            </Modal.Footer>
          </div>
        </div>
        <div className='forgot-password'>
          <a>Forgot your password?</a>
        </div>
      </Modal>
    </>
  );
}

export default LoginSignup;