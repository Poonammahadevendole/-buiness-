import React from "react";
import { useState } from "react";

import "./Header.css";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  // const router = useRouter();
  return (
    <>
      <div className="Header">
        <a href="">Witfix</a>


        <div className="mobile_nav">
          <button
            className="hamburger_icon"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <img src="/images/close.png" alt="close" />
            ) : (
              <img src="/images/menu.png" alt="open" />
            )}
          </button>
         {  navOpen && <div className= "mobile-Header_right">
          <nav>
            <a onClick={() => setNavOpen(false)} href="#homesection">
              Home
            </a>
            <a onClick={() => setNavOpen(false)} href="#Aboutsection">
              About
            </a>
            <a onClick={() => setNavOpen(false)} href="#footersection">
              Contact
            </a>
            
          </nav>
        </div>}
        </div>
        <div className="Header_right">
          <nav>
            <a  href="#homesection">
              Home
            </a>
            <a href="#Aboutsection">
              About
            </a>
            <a  href="http://localhost:3000/Policy">
              Privacy
            </a>
           
          </nav>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default Header;
