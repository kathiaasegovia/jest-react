import React from 'react';
import './slider.scss';
import { Carousel } from 'react-bootstrap';

export const Slider = () => (

    <Carousel data-test="carousel-comp">

        <Carousel.Item>
            <img data-test="carousel-img"        
                className="d-block w-100"
                src="https://source.unsplash.com/7jQh3EiS8Bs"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3 data-test="carousel-caption">1-First slide label</h3>
                <p data-test="carousel-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img data-test="carousel-img"
                className="d-block w-100"
                src="https://source.unsplash.com/7jQh3EiS8Bs"
                alt="Third slide"
            />
            <Carousel.Caption >
                <h3 data-test="carousel-caption">Second slide label</h3>
                <p data-test="carousel-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img data-test="carousel-img"
                className="d-block w-100"
                src="https://source.unsplash.com/7jQh3EiS8Bs"
                alt="Third slide"
            />
            <Carousel.Caption >
                <h3 data-test="carousel-caption">Third slide label</h3>
                <p data-test="carousel-description">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>

)