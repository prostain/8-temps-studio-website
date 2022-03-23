import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { getCurrentUser, logout } from '../../services/auth'
import { useHistory } from "react-router-dom";



import huitTempsLogoSm from '../../../asset/Horizontal/8T-White-sm.png'

export default function LandingPageNav() {
    const history = useHistory()
    const logoutUser = () => {
        logout();
        history.push('/home');
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/home"> <img className='imgScale' src={huitTempsLogoSm} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mx-auto">
                        <Nav.Link href="/home">Accueil</Nav.Link>
                        <Nav.Link href="/concept">Concept</Nav.Link>
                        <Nav.Link href="/concept">Catégories</Nav.Link>
                        <Nav.Link href="/concept">Professeurs</Nav.Link>
                        <Nav.Link href="/concept">Abonnement</Nav.Link>
                        <Nav.Link href="/concept">Contacts</Nav.Link>
                        <Nav.Link href="/concept">Blog</Nav.Link>

                    </Nav>
                    <Nav>
                        {localStorage.getItem('user') ? (
                            <>
                                <Nav.Link href='/profile'>
                                    <i className="bi bi-person-fill light"></i> Profil
                                </Nav.Link>
                                <Nav.Link>
                                    <Button onClick={logout}>
                                    Deconnexion
                                    </Button>
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link href='/login'>
                                <i className="bi bi-person-fill light"></i> Se connecter
                            </Nav.Link>

                        )}
                        <Nav.Link href=''>
                            <i className="bi bi-search"></i>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
