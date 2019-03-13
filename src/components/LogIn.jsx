import React, { Component } from 'react'
import { Form ,Container, Button} from 'react-bootstrap';
import './LogIn.css';

export default class LogIn extends Component {
  render() {
    return (
      <Container className="App">
        <Form className="form">
        <h3>Login</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Employee email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    )
  }
}
