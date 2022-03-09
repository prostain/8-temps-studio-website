import { Stack } from '@mui/material'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid  >
            <Stack>

            <a href=""> S'inscrire aux E-Mail</a>
            <a href="/register"> Devenir Membre</a>
            <hr />
            <a href="/help"> Aide </a>
            <a href="/help"> A propos de 8 temps studio </a>
            </Stack>

            <Stack>
                <div>FB</div>
                <div>IG</div>
                <div>YT</div>
            </Stack>
            <Row>
            © 2022
            </Row>
        </Container>
    )
}

export default Footer