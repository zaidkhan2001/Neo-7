import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer
      className="text-dark pt-4"
      style={{
        backgroundImage: `url('/Assets/footer-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Container>
        <Row className="justify-content-between">
          <Col md={3} className="mb-3">
            <h2 style={{ color: 'white' }}>Neo-7 Industries</h2>
            <p style={{ color: 'white' }}>
            Crafting Excellence Through Seamless Communication and Uncompromising Quality, Tailored to Your Needs
            </p>
          </Col>
          <Col md={2} className="mb-3">
            <h3 style={{ color: 'white' }}>Our Company</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Our Services</a></li>
              <li><a href="/projects" style={{ color: 'white', textDecoration: 'none' }}>Our Projects</a></li>
              <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h2 className="text-center" style={{ color: 'white' }}>Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.7385204675793!2d74.49687297511024!3d32.50641719776686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ee9cd5287b7bb%3A0x123517be018a8d9c!2sNeo-7%20Industries!5e0!3m2!1sen!2s!4v1721027197666!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </Col>
          <Col md={3} className="mb-3">
            <h2 style={{ color: 'white'}}>Address</h2>
            <p style={{ color: 'white'}}>
              Kashmir Road,<br />
              Ismailabad, Butt Street,<br />
              Sialkot-Pakistan.
            </p>
            <h2 style={{ color: 'white'}}>Contact</h2>
            <p style={{ color: 'white'}}>
              +92 52 4272667-69<br/>
              +92 321 6110244 (Whatsapp) <br/>
            </p>
            <h2 style={{ color: 'white'}}>Email</h2>
            <a href="mailto:info@neo-7.com" style={{ color: 'white', textDecoration: 'none' }}>
                info@neo-7.com
              </a>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p style={{ color: 'white' }}>&copy; {new Date().getFullYear()} Neo-7 Industries. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;