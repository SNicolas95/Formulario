import React from 'react'
import { Container , Navbar } from "react-bootstrap"

export default function NavbarMenu() {
  return (
   <div>
    <Navbar bg="dark" variant = "dark">
        <Container>
        <Navbar.Brand href="#"> 
        Dynamic. Form
         </Navbar.Brand>
         <Navbar.Toggle/>
         <Navbar.Collapse className="justify-content-end">
         <Navbar.Text>
            Signed in as
            <a href="www.google.com"
            target="blank"
            rel="noreferrer"/> Nicolas Sanchez <a/>
         </Navbar.Text>
         </Navbar.Collapse>
        </Container>
    </Navbar>
   </div>
  )
}

