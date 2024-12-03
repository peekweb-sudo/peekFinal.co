import React from 'react'
import "./about.css"
import aset from '../../Assetprop/art'
function About() {
  return (
    <div id='About' className="ab">
      <div className="container">
        <div className="about">
          <img src={aset.img5} alt="" />
          <div className="info-content">
            <h1>Our Company</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              praesentium eveniet corrupti reiciendis sapiente nihil, aspernatur
              consequatur optio nostrum eos nisi cumque maiores veniam inventore
              nam tempora dicta sit quasi error odit quibusdam distinctio. Aut.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              rem vero consequatur sit commodi! Rerum illo perferendis doloribus
              ducimus eaque?
            </p>
            <button className="btn turn">Learn More</button>{" "}
            <button className="btn">Our People</button>
          </div>
        </div>
        <div className="services">
          <div className="service-content">
            <h1>Our Services</h1>
            <b>Design</b>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              nesciunt unde nemo aliquid porro vel fugit iste cupiditate
              reprehenderit quis.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
              culpa?
            </p>
            <button className="turn ">LEARN MORE</button>
          </div>
          <img src={aset.img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About