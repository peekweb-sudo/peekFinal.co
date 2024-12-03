import React from 'react'
import "./new.css"
import aset from "../../Assetprop/art.js"
function News() {
  return (
    <div className="nw">
      <div className="news container">
        <div className="newsleft">
          <h1>News</h1>
          <p>
            veritatis consequuntur aliquam amet libero blanditiis quas saepe!
          </p>
          <button className="btn">VIEW ALL</button>
        </div>
        <div className="home-blog">
          <div className="blog-content">
            <img src={aset.img8} alt="" />
            <div className="blog-small-cont">
              <b>some blog title</b>
              <br />
              <p> inventore nostrum dolorem officia distinctio.</p>
            </div>
          </div>{" "}
          <div className="blog-content">
            <img src={aset.img8} alt="" />
            <div className="blog-small-cont">
              <b>some blog title</b>
              <br />
              <p> inventore nostrum dolorem officia distinctio.</p>
            </div>
          </div>{" "}
          <div className="blog-content">
            <img src={aset.img8} alt="" />
            <div className="blog-small-cont">
              <b>some blog title</b>
              <br />
              <p> inventore nostrum dolorem officia distinctio.</p>
            </div>
          </div>{" "}
          <div className="blog-content">
            <img src={aset.img8} alt="" />
            <div className="blog-small-cont">
              <b>some blog title</b>
              <br />
              <p> inventore nostrum dolorem officia distinctio.</p>
            </div>
          </div>{" "}
          <div className="blog-content">
            <img src={aset.img8} alt="" />
            <div className="blog-small-cont">
              <b>some blog title</b>
              <br />
              <p> inventore nostrum dolorem officia distinctio.</p>
            </div>
          </div>{" "}
          <div className="blog-content">
            <img src={aset.img8} alt="" />
            <div className="blog-small-cont">
              <b>some blog title</b>
              <br />
              <p> inventore nostrum dolorem officia distinctio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News