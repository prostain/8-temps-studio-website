import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'



function LandingPage() {
    return (
        <>

            <Container fluid className='default'>
                <Row >
                    <Col lg={12}>
                        <div className='landingPageMainVideo' >
                        <video src="http://temps-studio-api.herokuapp.com/assets/uploads/videos/ITWManon.mp4" autoPlay muted />
                        </div>
                    </Col>
                </Row>
                <Row className='landingPageMainText '>
                    <Col className='pt-2'>
                        <div className='landingPageTitle text-center'>
                            TES COURS DE DANSE
                        </div>
                        <div className='landingPageTitle text-center'>
                            100% Digital
                        </div>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit! Blanditiis est ipsam dolorem eum?
                        </p>
                    </Col>

                </Row>
                <Row>
                    <Col lg={6} md={12} className='p-5 landingPageTheme'>
                        <p className='landingPageThemeTitle'> COMTEMPORAIN</p>
                        <p className='landingPageThemeText'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto animi distinctio? Eveniet numquam quae voluptas ab magni distinctio debitis perferendis voluptates temporibus officia, nemo ipsum, voluptate exercitationem dolorem repudiandae.</p>
                        <Button className='landingPageButton'>DECOUVRIR</Button>
                    </Col>
                    <Col lg={6} md={12} className='landingPageVideo'> </Col>
                </Row>

                <Row>
                    <Col lg={{span:6, order:2}} md={{span :12, order:1}} className='p-5 landingPageTheme'>
                        <p className='landingPageThemeTitle'> CLASSIQUE</p>
                        <p className='landingPageThemeText'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto animi distinctio? Eveniet numquam quae voluptas ab magni distinctio debitis perferendis voluptates temporibus officia, nemo ipsum, voluptate exercitationem dolorem repudiandae.</p>
                        <Button className='landingPageButton'>DECOUVRIR</Button>

                    </Col>
                    <Col lg={{span:6, order:1}} md={{span :12, order:2}} className='landingPageVideo'> </Col>


                </Row>
            </Container>
        </>
    )
}

export default LandingPage