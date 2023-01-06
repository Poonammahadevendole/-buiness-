import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div id="Aboutsection" className="about_data">
        <div className="about_heading">
          <h1>
            With Wix Fit you’ll find everything you need to succeed online
          </h1>
        </div>
        <div className="about_wrapper">
          <div className="about_para">
            <h3>Bulid your brand</h3>
            <hr />
            <ul>
              <li>Lead deiving website</li>
              <li>Branded Mobile App</li>
              <li>Live streams & VOD </li>
              <li>online Challenge Progaram</li>
              <li>Membership And Packages</li>
            </ul>
          </div>
          <div className="about_para">
            <h3>Manage your operations</h3>
            <hr />
            <ul>
              <li>Custom reports & analytics</li>
              <li>Online scheduling & payments</li>
              <li>Integrated CRM solution </li>
              <li>Wix Owner mobile app</li>
              <li>Integrated CRM solution </li>
            </ul>
          </div>
          <div className="about_para">
            <h3>Grow your business</h3>
            <hr />
            <ul>
              <li>Built-in marketing suite</li>
              <li>Live chat</li>
              <li>Fitness blog</li>
              <li>Branded merchandise & gear</li>
              <li>Community experience</li>
            </ul>
          </div>
        </div>
        <div className="about_btn">
          <button>Let's Go</button>
        </div>
      </div>
    </>
  );
}

export default About;
