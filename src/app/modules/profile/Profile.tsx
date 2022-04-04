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
                        <Card className='profileCard'>
                            <Row>
                                <Col xs={4}>
                                    <img src="" alt="Profile picture" />
                                </Col>
                                <Col xs={8}>
                                    <Row className='pb-5 pt-1'>
                                        <h2 className='headline'>PROFIL</h2>
                                    </Row>
                                    <Row>
                                        <p> Prenom Nom </p>
                                    </Row>

                                    <Row>
                                        <p>Abonnement</p>
                                    </Row>

                                    <Row>
                                        <Col xs={12}> Telephone</Col>
                                        <Col xs={12}> email</Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Card>
                    </Col>

                    <Col xs={12} lg={{ span: 6, offset: 3 }}>
                        <Row className='gx-5 gy-4' >
                            <Col xs={6} lg={6} className=' d-grid' >
                                <Button href='/' className='btn8t'>Mon abonnement</Button>
                            </Col>

                            <Col xs={6} lg={6}  className=' d-grid'>
                                <Button href='/' className='btn8t'>Paiments</Button>
                            </Col>

                            <Col xs={6} lg={6}  className=' d-grid'>
                                <Button href='/' className='btn8t'>Mes données</Button>
                            </Col>

                            <Col xs={6} lg={6}  className=' d-grid'>
                                <Button href='/' className='btn8t'>Chat {"&"} service</Button>
                            </Col>

                        </Row>

                    </Col>
                </Row>


            </Container>

        </>
    )
}

export default Profile
