import React, { Component } from 'react'
import { Navbar, Nav,} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './CustomNavbar.css';


export default class CustomNavbar extends Component {
  
  render() {

    return (
     <Navbar default collapseOnSelect>
         <Navbar.Brand>
            <Link to="/">Corporate Leisure</Link>
         </Navbar.Brand>
         <Navbar.Toggle/>
       <Navbar.Collapse>
          <Nav className="justify-content-center"activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
             <Nav.Item>
               <Nav.Link href="/home">Active</Nav.Link>
           </Nav.Item>
           <Nav.Item>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
           </Nav.Item>
           <Nav.Item>
              <Nav.Link href="/login">LogIn</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link href="/dashboard"> Dashboard</Nav.Link>
           </Nav.Item>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
    )
  }
}
