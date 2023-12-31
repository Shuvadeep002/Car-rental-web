import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as DrawerIcon } from '../../assets/image/DeawerIcon.svg'
import './Style/Header.css'
export default function Header() {
    const [showDrawer, setShowDrawer] = useState(false);

    const handleDrawerClose = () => setShowDrawer(false);
    const handleDrawerShow = () => setShowDrawer(true);
    return (
        <>
            <Navbar bg="dark" variant="dark" className="p-2">
                <Button variant="outline-dark" onClick={handleDrawerShow}>
                    {/* Open Drawer */}
                    <DrawerIcon height={40} width={40}/>
                </Button>
                <Navbar.Brand className="ml-auto" href="/home">Coastal Cars</Navbar.Brand>
                <Nav className="ms-auto">
                    {/* Add other navigation items if needed */}
                </Nav>
            </Navbar>

            <Offcanvas show={showDrawer} onHide={handleDrawerClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="custom-side-drawer">
                    {/* Add your sidebar content here */}
                    <Nav defaultActiveKey="/home" className="flex-column ">
                        <Nav.Link href="/home" className='lable-text'>Home</Nav.Link>
                        <Nav.Link href="/about" className='lable-text'>About</Nav.Link>
                        <Nav.Link href="/contact" className='lable-text'>Contact</Nav.Link>
                        <Nav.Link href="/signIn" className='lable-text'>Login or SignUp</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
