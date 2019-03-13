import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron,Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
              <h2>TimeOff.Management</h2>
              <p>Open source,simple yet powerful absence managements software for small and medium size business.</p>
              <p>Endorsed by hundreds of software developers.</p>
              <Link to="about">
                  <Button bsStyle="primary"> Sign Up</Button>
              </Link>
          </Jumbotron>
          <Row className="justify-content-md-center">
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/family.jpg" circle className="profile-pic"/>
                   <h4>Family</h4>
               </Col>
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/healthcare.jpg" circle className="profile-pic"/>
                   <h4>Healthcare</h4>
               </Col>
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/maternity.jpg" circle className="profile-pic"/>
                   <h4>Maternity</h4>
                  
               </Col>
          </Row>
      </Container>
    )
  }
}
