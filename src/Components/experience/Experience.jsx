import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

function Experience({ setActive }) {
  const pageHeight = window.innerHeight;
  const observerMargin = Math.floor(pageHeight / 2);
  const { ref, inView } = useInView({
    rootMargin: `-${
      pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
    }px 0px -${observerMargin}px 0px`,
  });

  if (inView) {
    setActive("#experience");
  }

  return (
    <section id="experience" ref={ref}>
      {console.log("exp", inView)}
      <h5>What Skills I Have</h5>
      <h2>MY Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__additional">
          <h3>Programming Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
