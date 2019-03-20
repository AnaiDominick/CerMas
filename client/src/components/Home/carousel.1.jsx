import React from "react";
import "../../styles/carousel1.css";
import slider1 from "../../img/car-1.jpg";
import slider2 from "../../img/car-2.jpg";
import slider3 from "../../img/car-3.jpg";

const carouselSlidesData = [{ slider1 }, { slider2 }, { slider3 }];

class Carousel1 extends React.Component {
  /*constructor(props) {
    super(props);
    slides = { carouselSlidesData };
    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({ activeIndex: index });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <a
          href="#"
          className="carousel__arrow carousel__arrow--left"
          onClick={e => this.goToPrevSlide(e)}
        >
          <span>&#10094;</span>
        </a>
        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) => (
            <li
              className={
                index == this.state.activeIndex
                  ? "carousel__slide carousel__slide--active"
                  : "carousel__slide"
              }
              key={index}
            >
              <span className="carousel-slide__content">{slide.content}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="carousel__arrow carousel__arrow--right"
          onClick={e => this.goToNextSlide(e)}
        >
          <span>&#10095;</span>
        </a>
        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) => (
            <li key={index}>
              <a
                className={
                  index == this.state.activeIndex
                    ? "carousel__indicator carousel__indicator--active"
                    : "carousel__indicator"
                }
                onClick={e => this.goToSlide(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }*/
}

export default Carousel1;
