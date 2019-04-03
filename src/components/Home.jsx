import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Container, Button,Row,Image,Col,} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <Navbar  bg="primary" expand="lg" default collapseOnSelect>
         <Navbar.Brand href="/">
         Corporate TimeOff 
         </Navbar.Brand>
            <Nav className="ml-auto">
            
            <Nav.Link className="link" href="/Signin"><Button className="signin-btn">Sign In</Button></Nav.Link>
            </Nav>
     </Navbar>
     </div>
      <Container>
      <div class="jumbotron">
 
              <h2 class="display-4">Corporate TimeOff</h2>
              <p class="lead">Open source,simple yet powerful timeoff managements software for small and medium size business.</p>
              <hr class="my-4"/>
              <p class="lead">Endorsed by hundreds of software developers.</p>
              <Link to="signup">
              <a class="btn btn-primary btn-lg" href="/signup" role="button">Sign Up</a>
              </Link>
          </div>
          <div>
          <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/family.jpg"  className="profile-pic"/>
                    <p>To spend more time with your family.</p>
                </Col>
                
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/healthcare.jpg"  className="profile-pic"/>
                    <p>Going for a thorough medical checkup at your own convenient time.</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/maternity.jpg"  className="profile-pic"/>
                    <p>Welcoming a child</p>
                </Col>


            </Row>
          </div>
          
          <h5>Planning your timeoff...</h5>
          <footer>&copy;Corporate TimeOff 2019</footer>
          </Container>
            </div>
    )
  }
}
