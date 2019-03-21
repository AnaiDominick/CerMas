import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image1 from "../../img/car-1.jpg";
import Image2 from "../../img/car-2.jpg";
import Image3 from "../../img/car-3.jpg";
import "../../styles/Carousel.css";

class CustomCarousel extends React.Component {
  render() {
    return (
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 slide"
              src={Image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Intuitive, easy to use</h3>
              <p>
                In a few simple steps start your own Database Administration
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slide"
              src={Image2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>CER + Premium</h3>
              <p>
                The best option for your Database Administration with
                enhancements
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slide"
              src={Image3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Reach your Goals</h3>
              <p>
                With this tool plan your Administration Strtegy and make your
                business grow
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default CustomCarousel;
