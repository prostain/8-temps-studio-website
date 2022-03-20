import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { getCurrentUser } from '../../services/auth'


import huitTempsLogoSm from '../../../asset/Horizontal/8T-White-sm.png'

export default function LandingPageNav() {
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
                        <Nav.Link>
                            {localStorage.getItem('user') ? "Connecté" : "S'inscrire"}
                            <i className="bi bi-person-fill light"></i>
                            <i className="bi bi-search"></i>
                            <svg className="bi" width="32" height="32" fill="currentColor">
                                <use xlinkHref="bootstrap-icons.svg#heart-fill" />
                            </svg>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
