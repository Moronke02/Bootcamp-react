import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Jumbotron,Container, Row, Col, Image, Button,} from 'react-bootstrap';
import './Home.css';
//import office from '../office.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <Navbar  bg="primary" expand="lg" default collapseOnSelect>
         <Navbar.Brand href="/">
         Corporate Leisure 
         </Navbar.Brand>
            <Nav className="ml-auto">
            
            <Nav.Link className="link" href="/Signin"><Button className="signin-btn">Sign In</Button></Nav.Link>
            <Nav.Link className="pricing" href="/dashboard"><Button>Dashboard</Button></Nav.Link>
            </Nav>
     </Navbar>
     </div>
      <Container>
        <Jumbotron>
              <h2>Corporate Leisure</h2>
              <p>Open source,simple yet powerful time off managements software for small and medium size business.</p>
              <p>Endorsed by hundreds of software developers.</p>
              <Link to="signup">
                  <Button bsStyle="primary" href="/signup"> Sign Up</Button>
              </Link>
          </Jumbotron>
          <Row className="show-grid text-center">
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/family.jpg" circle className="profile-pic" roundedCircle/>
                   <h4>Family</h4>
               </Col>
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/healthcare.jpg" circle className="profile-pic" roundedCircle/>
                   <h4>Healthcare</h4>
               </Col>
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/maternity.jpg" circle className="profile-pic" roundedCircle/>
                   <h4>Maternity</h4>
                  
               </Col>
          </Row>
          
          <footer>&copy;Corporate Leisure 2019</footer>
          </Container>
            </div>
    )
  }
}
