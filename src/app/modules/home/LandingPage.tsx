import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'



function LandingPage() {
    return (
        <>

            <Container fluid className='default'>
                <Row className='landingPageMainVideo'>
                    <Col lg={12}>
                        Video
                    </Col>
                </Row>
                <Row className='landingPageMainText'>
                    <p className='landingPageTitle'>
                        Lorem Ipsum
                    </p>
                    <p className='landingPageSubtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit! Blanditiis est ipsam dolorem eum?
                    </p>
                </Row>
                <Row>
                    <Col lg={6} md={12} className='p-5 landingPageTheme'>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto animi distinctio? Eveniet numquam quae voluptas ab magni distinctio debitis perferendis voluptates temporibus officia, nemo ipsum, voluptate exercitationem dolorem repudiandae.</p>
                        <button className='landingPageButton'>DECOUVRIR</button>

                    </Col>
                    <Col lg={6} md={12} className='landingPageVideo'> </Col>

                    <Col lg={6} md={12} className='landingPageVideo'> </Col>
                    <Col lg={6} md={12} className='p-5 landingPageTheme'>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto animi distinctio? Eveniet numquam quae voluptas ab magni distinctio debitis perferendis voluptates temporibus officia, nemo ipsum, voluptate exercitationem dolorem repudiandae.</p>
                        <button className='landingPageButton'>DECOUVRIR</button>

                    </Col>
                    <Col lg={6} md={12} className='p-5 landingPageTheme'>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto animi distinctio? Eveniet numquam quae voluptas ab magni distinctio debitis perferendis voluptates temporibus officia, nemo ipsum, voluptate exercitationem dolorem repudiandae.</p>
                        <button className='landingPageButton'>DECOUVRIR</button>

                    </Col>
                    <Col lg={6} md={12} className='landingPageVideo'> </Col>

                    <Col lg={6} md={12} className='landingPageVideo'> </Col>
                    <Col lg={6} md={12} className='p-5 landingPageTheme'>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto animi distinctio? Eveniet numquam quae voluptas ab magni distinctio debitis perferendis voluptates temporibus officia, nemo ipsum, voluptate exercitationem dolorem repudiandae.</p>
                        <button className='landingPageButton'>DECOUVRIR</button>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LandingPage