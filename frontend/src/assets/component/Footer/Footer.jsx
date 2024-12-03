import React from 'react'
import "./footer.css"
import aset from "../../Assetprop/art"
function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="downfooter">
          <form>
            <div className="newsletter">
              <h1>Our Newsletter</h1>
              <p>get instant news by suscribing to our newsletter.</p>
            </div>
            <div className="email">
             
              <input placeholder="email" type="email" />
              <button>Send</button>
            </div>
          </form>
          <div className="copy">
            <img src={aset.logo} alt="" />
            <ul>
              <h1>Location</h1>
              <li>Osogbo, Nigeria.</li>
            </ul>
            <ul>
              <h1>Contact</h1>
              <p>+2348077080903</p>
            </ul>
          </div>
          <hr />
          <div className="botom">
            <p>&copy;2024 PEEK.CO: all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer