/* eslint-disable react/no-unescaped-entities */
import "./header.css";
import Me from "../../assets/me.png";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amit Jahagirdar</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="Amit Jahagiradr" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
