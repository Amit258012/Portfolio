/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import CV from "../../assets/cv.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download="Amit's CV" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
