import React from 'react';
import { useState } from 'react';
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';


const Header1 = () => {
    const [show, setShow] = useState(false);

    return (
        <Container>
            <InputGroup className="my-4 ">
                <img src="/public/logo.png" className='me-5 w-0' alt="" />
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                    variant="outline-secondary"
                    title="All Categories"
                    id="input-group-dropdown-2"
                    align="center"
                >
                    <Dropdown.Item href="#">Mens</Dropdown.Item>
                    <Dropdown.Item href="#">Womens</Dropdown.Item>
                    <Dropdown.Item href="#">Electronics</Dropdown.Item>
                </DropdownButton>
                <Button><FaSearch className='align-items-center text-center' /></Button>
                <div className="div">
                    <FaRegUser className='ms-5' />
                    <DropdownButton
                        variant="bg-transparent"
                        title="Account"
                        id="input-group-dropdown-2"
                        align="center"
                    >
                        <Dropdown.Item href="#">Register</Dropdown.Item>
                        <Dropdown.Item href="#">Checkout</Dropdown.Item>
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="div">
                    <FaRegHeart />
                    <DropdownButton
                        variant="bg-transparent"
                        title="Account"
                        id="input-group-dropdown-2"
                        align="center"
                    >
                        <Dropdown.Item href="#">Register</Dropdown.Item>
                        <Dropdown.Item href="#">Checkout</Dropdown.Item>
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="div">
                    <MdOutlineShoppingCart />
                    <DropdownButton
                        variant="bg-transparent"
                        title="Account"
                        id="input-group-dropdown-2"
                        align="center"
                    >
                        <Dropdown.Item href="#">Register</Dropdown.Item>
                        <Dropdown.Item href="#">Checkout</Dropdown.Item>
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                    </DropdownButton>
                </div>
            </InputGroup>
        </Container >

    );
}

export default Header1;