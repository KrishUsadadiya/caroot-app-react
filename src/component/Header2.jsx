import React from 'react';
import { useState } from 'react';
import { Accordion, NavDropdown, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';

const Header2 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <div className="header2">
                    <Navbar expand="lg" className='text-body'>

                        <Navbar.Brand>
                            <HiOutlineMenuAlt1 onClick={handleShow} variant="primary" className='border rounded-3' style={{ fontSize: '30px' }} />
                        </Navbar.Brand>

                     
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="ms-auto mt-4 mx-5">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <NavDropdown title="Category" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Shop Left sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Shop Right sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Full Width</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Products" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">product Left sidebar </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">product Right sidebar </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Product Full Width
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Track Order</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Faq</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Register</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Policy</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Blog" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Left Sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Right Sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Full Width</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Detail Left Sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Detail Right Sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Detail Full Width</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Elements" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Shop Left sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Shop Right sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Full Width</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <div className=" ms-5 mt-4">
                                <span>
                                    <IoCallOutline className='me-3' />
                                    +123 ( 456 ) ( 7890 )
                                </span>
                            </div>
                        </Navbar.Collapse>
                      
                    </Navbar>
                </div>
            </Container >
        </>
    );
}

export default Header2;
