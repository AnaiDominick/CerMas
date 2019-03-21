import React, { Component } from "react";

import Plans from "../components/Home/plans";
// import Carousel from "../components/Home/carousel";
// import Carousel1 from "../components/Home/carousel.1";
import Carousel from "../components/Carousel/Carousel";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="carousel-container">{/* <Carousel1 />*/}</div>
        <Carousel />
        <Plans />
      </div>
    );
  }
}

export default Home;
