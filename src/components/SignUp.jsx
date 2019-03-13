import React, { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap';

export default class signup extends Component {
  render() {
    return (
      <Container className="App">
      <Form>
      <h3>Register Here</h3>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="Enter firstname" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Last name</Form.Label>
      <Form.Control type="text" placeholder="Enter lastname" />
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Enter address" />
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="number" placeholder="12345" />
    </Form.Group>
    </Form.Group>
    <Form.Group controlId="formBasicChecbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
    )
  }
}
