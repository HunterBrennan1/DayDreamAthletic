import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeroImg from '../assets/img/bannerimg.webp'
import AdidasHatBlack from '../assets/img/adidas-hat-black.jpg'
import BucketHat from '../assets/img/adidas-bucket-hat.webp'
import Beanie from '../assets/img/adidas-beanie-green.jpg'
import JacketBlack from '../assets/img/adidas-jacket-black.webp'
import JacketGray from '../assets/img/adidas-jacket-gray.jpg'
import WindBreakerBlack from '../assets/img/adidas-windbreaker-black.webp'
import PantsBlack from '../assets/img/black-sweatpants.webp'
import PantsBlack2 from '../assets/img/black-sweatpants-2.webp'
import ShortsBlack from '../assets/img/black-shorts.webp'
import ShoesBlack from '../assets/img/shoes-black.webp'
import ShoesWhite from '../assets/img/shoes-white.webp'
import ShoesTan from '../assets/img/shoes-tan.webp'
import FifaBanner from '../assets/img/fifabanner.webp'
import FifaBanner2 from '../assets/img/fifabanner2.jpg'

import Carousel from 'react-bootstrap/Carousel';

export const MainPage = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);


  return (
    <section>
      <Carousel>
        <Carousel.Item className="carousel-item" interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src={FifaBanner2}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={HeroImg}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={FifaBanner2}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <div className="carousel-filter-container">

        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100 filter-img"
              src={AdidasHatBlack}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={Beanie}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={BucketHat}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100 filter-img"
              src={JacketBlack}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={JacketGray}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={WindBreakerBlack}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100 filter-img"
              src={PantsBlack}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={ShortsBlack}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={PantsBlack2}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100 filter-img"
              src={ShoesBlack}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={ShoesWhite}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={ShoesTan}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default MainPage;