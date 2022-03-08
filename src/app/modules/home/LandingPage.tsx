import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'



function LandingPage() {
    return (
        <>
            <div className='landingPageNav'>
                <div className='sideNav'>
                    <img src={'./src/asset/Horizontal/8T-Black.png'} alt="" />
                </div>

                <div>
                    <a href="/home"> Accueil </a>

                </div>

                <div>
                    <a href='#'>Concept</a>
                </div>


                <div>
                    <a href='#'>Catégories</a>
                </div>
                <div>
                    <a href='#'>Professeurs</a>
                </div>

                <div>
                    <a href='#'>Abonnements</a>
                </div>

                <div>
                    <a href='#'>Blog</a>
                </div>

                <div>
                    <a href='#'> Contacts</a>
                </div>

                <div className='sideNav'>

                    <i className="bi bi-person-fill"></i>

                    <i className="bi bi-search"></i>

                </div>

            </div>

            <Container fluid>
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