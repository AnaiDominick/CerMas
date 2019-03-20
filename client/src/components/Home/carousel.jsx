import React from "react";
import "../../styles/carousel.css";
import slider1 from "../../img/car-1.jpg";
import slider2 from "../../img/car-2.jpg";
import slider3 from "../../img/car-3.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    //setTimeout(this.showSlides, 4000);
  }
  static defaultProps = {
    slideIndex: 0
  };

  //showSlides();

  // Next/previous controls

  plusSlides = n => {
    this.showSlides((this.props.slideIndex += n));
  };

  showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.props.slideIndex++;
    if (this.props.slideIndex > slides.length) {
      this.props.slideIndex = 1;
    }
    /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[this.props.slideIndex - 1].style.display = "block";
    dots[this.props.slideIndex - 1].className += " active";

    setTimeout(this.showSlides, 4000); // Change image every 2 seconds
  };

  render() {
    return (
      <div className="slideshow-container">
        <div className="mySlides">
          <img src={slider1} alt="img1" />
        </div>

        <div className="mySlides">
          <img src={slider2} alt="img2" />
        </div>

        <div className="mySlides">
          <img src={slider3} alt="img3" />
        </div>

        {/* <a className="prev" onClick={this.plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={this.plusSlides(1)}>
          &#10095;
    </a> */}

        <div className="dot-position">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    );
  }
}

export default Carousel;

/*
script original 

var slideIndex = 0;
showSlides();

// Next/previous controls

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }



*/
