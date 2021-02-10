import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Slider from './Slider'
import img from '../skive.png'
import img2 from '../aalborg.png'
import img3 from '../gdansk.png'
import Jumbotron from './Jumbotron'

export default function Home() {
    return (
        <div>
            <Slider />
            <div style={{backgroundColor: 'gray'}}>
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Sjorup Forest</Card.Title>
                                <Card.Text>Vladimir painted this picture in Denmark 2020</Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Aalborg, Denmark</Card.Title>
                                <Card.Text>Vladimir painted this picture in Denmark 2020</Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Gdansk, Poland</Card.Title>
                                <Card.Text>Vladimir painted this picture in Poland 2018, oil on canvas, 40/50</Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
            <Jumbotron />
            <Container style={{marginBottom: '30px'}}>
                <Row>
                    <Col md={7}>
                        <Card.Img src={img2} height={200} />
                    </Col>
                    <Col md={5}>
                    <p>
                    Volodymyr Sinusik
E-mail: sinusikvova@gmail.com
Available paintings for purchase
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
