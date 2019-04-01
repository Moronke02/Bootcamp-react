import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Container, Button,} from 'react-bootstrap';
import './Home.css';
//import background from '../background.jpg';

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
          <div class="person-wrapper">
          <div class="row">
          <div class="row show-grid text-center">
          <div class="col-md-4">
            <div class="thumbnail">
              <img src="assets/family.jpg" alt=""/>
              <div class="caption">
                <h3> Family</h3>
                <p>To spend more time with your family.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="thumbnail">
              <img src="assets/healthcare.jpg" alt=""/>
              <div class="caption">
                <h3> Healthcare</h3>
                <p>Going for a thorough maedical checkup at your own convenient time.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="thumbnail">
              <img src="assets/maternity.jpg" alt=""/>
              <div class="caption">
                <h3>Maternity</h3>
                <p>Welcoming a child</p>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          
          <h5>Planning your timeoff...</h5>
          <footer>&copy;Corporate TimeOff 2019</footer>
          </Container>
            </div>
    )
  }
}
