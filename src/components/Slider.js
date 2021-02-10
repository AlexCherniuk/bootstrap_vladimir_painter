import React from 'react'
import { Carousel} from 'react-bootstrap'
import image from './../first-image.jpg';
import image2 from './../image2.jpg';
import image3 from './../image3.jpg';


export default function Slider() {
    return (
        <Carousel add fade={true}>
            <Carousel.Item style={{'height': '670px'}}>
                <img 
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>afasdfasdfasdfasdfas</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '670px'}}>
                <img className="d-block w-100"
                    src={image2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Текст поверх картинки</h2>
                </Carousel.Caption>
            </Carousel.Item>  
            <Carousel.Item style={{'height': '670px'}}>
                <img className="d-block w-100"
                    src={image3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Текст поверх картинки</h2>
                </Carousel.Caption>
            </Carousel.Item>    
        </Carousel>
    )
}
