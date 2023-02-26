import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="footersection" className="Footer_container">
        <div className="footer_wrapper">
          <div className="footer_intro">
            <h2>wixfit Grow Your Business </h2>
            <p>
              The Wix website builder offers a complete solution from
              enterprise-grade infrastructure and business features to advanced
              SEO and marketing tools–enabling anyone to create and grow online.
            </p>
          </div>
          <div className="footer_data">
            <ul>
              <li>
                <Link to="/About"> About Us</Link>
              </li>
             
            </ul>
          </div>
          <div className="footer_last">
            <ul>
             
              <li>
                <Link to="/Policy">Privacy and Policy</Link>
              </li>
              <li>
                <Link to="/Terms">Terms and condition</Link>
              </li>
            </ul>
            
          </div>
          <div className="footer_icon">
            <a href="https://www.instagram.com/wix/">
              {" "}
              <img src="./images/insta.png" alt="" />
            </a>
            <a href="">
              {" "}
              <img src="./images/watsaap.png" alt="" />
            </a>
            <a href="https://www.pinterest.com/wixcom/">
              {" "}
              <img src="./images/pinterest.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
