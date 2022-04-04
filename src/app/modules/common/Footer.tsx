import React from 'react'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import '../../../styles/footer.css'
function Footer() {
    return (
        <Container  className='mainFooter pt-5 ' >
            <Row>
                <Col lg={4}>
                    <Stack gap={4}>
                        <a href=""> S'inscrire aux E-Mail</a>
                        <a href="/register"> Devenir Membre</a>
                        <a href="/help"> Aide </a>
                        <a href="/help"> A propos de 8 temps studio </a>
                        <Stack direction='horizontal' gap={3}>
                            <a><i className="bi bi-facebook"></i></a>
                            <a><i className="bi bi-instagram"></i></a>
                            <a><i className="bi bi-youtube"></i></a>
                        </Stack >
                    </Stack>

                </Col>
            </Row>
            <Row>
                <Col className='footerBottom d-flex justify-content-end gap-3 text-end bottomFooter' >
                    <hr />
                    <span> <a href="#"> 8 Temps Studio</a></span>
                    <span> <a href="#"> Guides</a></span>
                    <span> <a href="#"> Conditions d'utilisation</a></span>
                    <span> <a href="#"> Mention Légales</a></span>
                    <span> <a href="#"> Politiques en termes de confidentialité</a></span>
                </Col>
            </Row>
            {/* 

            <Stack>
                

            </Stack>
            <Row>
            © 2022
            </Row> */}
        </Container>
    )
}

export default Footer