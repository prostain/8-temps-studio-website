import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'


export default function Teachers() {

  return (
    <Container className='default'>
      <Row>
        <Col >
          <h1 className='mx-auto text-center py-5' > Profs </h1>
        </Col>
      </Row>
      <Row className='g-5'>

      <Col xs={12} lg={4}>
          <Card className="bg-dark text-white text-center ">
            <Card.Img src="http://via.placeholder.com/640x640" alt="Card image" />
            <Card.ImgOverlay className='my-auto p-0'>
              <Card.Title className='teacherTitleCard' >Card title</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark text-white text-center ">
            <Card.Img src="http://via.placeholder.com/640x640" alt="Card image" />
            <Card.ImgOverlay className='my-auto p-0'>
              <Card.Title className='teacherTitleCard' >Card title</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark text-white text-center ">
            <Card.Img src="http://via.placeholder.com/640x640" alt="Card image" />
            <Card.ImgOverlay className='my-auto p-0'>
              <Card.Title className='teacherTitleCard' >Card title</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>


      </Row>
    </Container>
  )
}
