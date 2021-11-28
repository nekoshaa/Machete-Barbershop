import React from 'react'
import { Carousel } from 'react-bootstrap'
import first from '../../media/allyson-carter-lmZ_JVfbmY4-unsplash.jpg'
import second from '../../media/hai-phung-m4Pd_e-4zKs-unsplash.jpg'
import third from '../../media/allyson-carter-_XUsfZd-Ktg-unsplash.jpg'
import styles from './Slides.module.css'
const Slides = () => {
    return (
        <div>
            <Carousel style={{ userSelect: 'none' }}>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={first}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={second}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={third}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slides;