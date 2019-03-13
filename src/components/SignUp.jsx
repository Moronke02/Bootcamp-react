import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';

export default class signup extends Component {
  render() {
    return (
      <Form action="" method="POST">
  
      <Form.Group as={Col} controlId="formGroupPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Firstname" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGroupPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Lastname" />
    </Form.Group>
  
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
   </Form.Group>

    <Form.Group as={Col} controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
     <Form.Group controlId="formGroupAddress1">
    <Form.Label>Address</Form.Label>
      <Form.Control placeholder=" Q/45 Simpson St." />
    </Form.Group>

    <Form.Group controlId="formGroupMobileNumber">
       <Form.Label>Mobile Number</Form.Label>
    <Form.Control placeholder="080*******1" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGroupCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
  }
}
