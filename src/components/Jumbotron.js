import React from 'react'
import image from '../first-image.jpg';
import styled from 'styled-components';
import {  Jumbotron as Jumbo, Container} from 'react-bootstrap';

const ContainerStyled = styled.div`
    .jumbo {
    background: url(${p => p.image}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
}
    .overlay {
        background-color: black;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
<ContainerStyled image={image}>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Vladimir Sinysik</h1>
            <p>Volodymyr Sinusik
E-mail: sinusikvova@gmail.com
Available paintings for purchase</p>
        </Container>
    </Jumbo>
</ContainerStyled>   
)

export  default Jumbotron ;