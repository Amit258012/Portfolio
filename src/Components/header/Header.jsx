import "./header.css";
import Me from "../../assets/me.png";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import { useInView } from "react-intersection-observer";

function Header({ setActive }) {
  const pageHeight = window.innerHeight;
  const observerMargin = Math.floor(pageHeight / 2);
  const { ref, inView } = useInView({
    rootMargin: `-${
      pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
    }px 0px -${observerMargin}px 0px`,
  });
  if (inView) {
    setActive("#");
  }
  return (
    <header ref={ref}>
      {console.log("about", inView)}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="amit">Amit Jahagirdar</h1>
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
