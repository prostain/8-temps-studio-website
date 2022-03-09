import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import Tile from '../common/Tile'
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../common/Footer';

function Profile() {
    return (
        <>
            <Container fluid className='default'>

                <Card>
                    <Row>
                        <Col xs={4}>
                            <img src="" alt="Profile picture" />
                        </Col>
                        <Col xs={8}>
                            <Row>
                                <p>PROFIL</p>
                            </Row>
                            <Row>
                                Prenom Nom
                            </Row>

                            <Row>
                                Abonnement
                            </Row>

                            <Row>
                                <Col xs={12}> Telephone</Col>
                                <Col xs={12}> email</Col>
                            </Row>
                        </Col>
                    </Row>

                </Card>
                <Row  className="d-grid gap-3 px-5 py-3" >
                    <Button variant='light' className='btn8t'>Mon abonnement</Button>
                    <Button variant='light' className='btn8t'>Paiments</Button>
                    <Button variant='light' className='btn8t'>Mes données</Button>
                    <Button variant='light' className='btn8t'>Chat {"&"} service</Button>
                </Row>

                <Footer />
            </Container>

        </>
    )
}

export default Profile
