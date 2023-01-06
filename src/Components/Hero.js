import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div id="homesection " className="Hero">
       <div className="Hero_container">
       <div className="Hero_left">
          <div className="Hero_heading">
            <h1>Build a more powerful fitness business</h1>
          </div>
          <div className="Hero_para">
            <p>
              Keep up with a changing industry, make your clients feel their
              best, and boost your productivity—all from a single platform.
            </p>
          </div>
          <div className="Hero_button">
            <button href= "https://users.wix.com/signin?forceRender=true" className="Hero_btn">Let's Go</button>
          </div>
        </div>
       
          <div className="Hero_right">
            <img src="./images/girl.png" alt="" />
       
          </div>
       </div>
     

        
      </div>
    </>
  );
}

export default Hero;
