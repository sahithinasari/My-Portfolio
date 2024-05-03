import React from "react";
import "./Header.css";
import CTA from "./CTA";
import IU from "../../assets/iu2.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Lee Ji Eun</h1>
        <h5 className="text-light">K-pop Singer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll_down">
        Scroll Down
  </a>
  <div className="me">
  <img src={IU} alt="iu" className="iu"/>
</div>
      
      </div>
    </header>
  );
};

export default Header;
