import "./header.css";
import Me from "../../assets/imgs/me.png";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <header ref={ref}>
      {/* {console.log("about", inView)} */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="amit" data-aos="zoom-in">
          Amit Jahagirdar
        </h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="Amit Jahagiradr" data-aos="fade-up" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
