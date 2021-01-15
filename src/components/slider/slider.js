import React from 'react';
import './slider.css';
import {Carousel} from 'react-bootstrap';

export const Slider = () => (

    <Carousel>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://source.unsplash.com/7jQh3EiS8Bs"
        alt="First slide"
    />
    <Carousel.Caption>
        <h3>1-First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://source.unsplash.com/7jQh3EiS8Bs"
        alt="Third slide"
    />
    <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://source.unsplash.com/7jQh3EiS8Bs"
        alt="Third slide"
    />
    <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>

)