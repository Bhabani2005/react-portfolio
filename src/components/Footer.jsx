import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bhabani-charan-panda-5b0379275/" target="_blank" className="linkedin"><img src={navIcon1} alt="" /></a>
              <a href="#" className="facebook"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/pandabhabanicharan/?hl=en" target="_blank" className="instagram"><img src={navIcon3} alt="" /></a>
            </div>

            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
