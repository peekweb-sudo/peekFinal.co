import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import sliderItems from "./sliderProps/sliderProps"
function Slidered() {
     var settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       arrow:true,
     };

  return (
    <div className="container">
      <div className="slider">
        <h1>Projects</h1>
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <div className='slides-content'>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slidered