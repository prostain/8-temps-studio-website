import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { getUserData } from '../../services/user';

function Profile() {
    const currentUser = getUserData()
    console.log(currentUser);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={{ span: 6, offset: 3 }}>
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
                    </Col>
                </Row>

                <Row className="gap-3 px-5 py-3" >
                    <Col xs={6} lg={ 6} classname='d-block'>
                        <Button href='/' className='btn-link btn8t'>Mon abonnement</Button>
                    </Col>

                    <Col xs={6} lg={6}>
                        <Button href='/' className='btn-link btn8t'>Paiments</Button>
                    </Col>

                    <Col xs={6} lg={6}>
                        <Button href='/' className='btn-link btn8t'>Mes données</Button>
                    </Col>

                    <Col xs={6} lg={6}>
                        <Button href='/' className='btn-link btn8t'>Chat {"&"} service</Button>
                    </Col>

                </Row>

            </Container>

        </>
    )
}

export default Profile
