import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeroImg from '../assets/img/bannerimg.webp'
import Carousel from 'react-bootstrap/Carousel';

export const MainPage = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);


  return (
    <section>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-img"
            src={HeroImg}
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
            src={HeroImg}
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
              src={HeroImg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={HeroImg}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100 filter-img"
              src={HeroImg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={HeroImg}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100 filter-img"
              src={HeroImg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={HeroImg}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100 filter-img"
              src={HeroImg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <img
              className="d-block w-100"
              src={HeroImg}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default MainPage;