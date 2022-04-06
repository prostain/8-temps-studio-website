import React from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import '../../../styles/footer.css'
function Footer() {
    return (
        <Container  className='mainFooter pt-5 ' >
            <Row>
                <Col lg={4}>
                    <Stack gap={4}>
                        <a href="/mailSubscription"> S'inscrire aux E-Mail</a>
                        <a href="/register"> Devenir Membre</a>
                        <a href="/help"> Aide </a>
                        <a href="/about"> A propos de 8 temps studio </a>
                        <Stack direction='horizontal' gap={3}>
                            <Button className='p-0 m-0' variant='link' href='https://www.facebook.com/8tempsstudio'><i className="bi bi-facebook"></i></Button>
                            <Button className='p-0 m-0' variant='link' href='https://www.instagram.com/8tempsstudio/'><i className="bi bi-instagram"></i></Button>
                            <Button className='p-0 m-0' variant='link' href='#'><i className="bi bi-youtube"></i></Button>
                        </Stack >
                    </Stack>

                </Col>
            </Row>
            <Row>
                <Col className='footerBottom d-flex justify-content-end gap-3 text-end bottomFooter' >
                    <hr />
                    <span> <Button variant='link' className='p-0 m-0' href="/home"> 8 Temps Studio</Button></span>
                    <span> <Button variant='link' className='p-0 m-0' href="/home"> Guides</Button></span>
                    <span> <Button variant='link' className='p-0 m-0' href="/home"> Conditions d'utilisation</Button></span>
                    <span> <Button variant='link' className='p-0 m-0' href="/home"> Mention Légales</Button></span>
                    <span> <Button variant='link' className='p-0 m-0' href="/home"> Politiques en termes de confidentialité</Button></span>
                </Col>
            </Row>

        </Container>
    )
}

export default Footer