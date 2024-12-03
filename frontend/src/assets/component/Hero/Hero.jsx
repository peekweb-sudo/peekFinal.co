import React from 'react'
import "./hero.css"
function Hero() {
  return (
    <>
      <main>
        <div className="container">
          <div className="hero-content">
            <p>welcome to</p>
            <h1>PEEK.CO</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              voluptas illum. Doloremque, adipisci! Similique perspiciatis
              commodi quibusdam!
            </p>
            <button className="btn turn"> Enquire</button>{" "}
            <button className="btn "> Our Services</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero