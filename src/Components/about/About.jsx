/* eslint-disable react/no-unescaped-entities */
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

function About() {
  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="amit's Image" className="about__me-image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ months as Intern</small>
            </article>
            <article className="about__card">
              <SiUdemy className="about__icon" />
              <h5>Courses</h5>
              <small>3+ Courses completed</small>
            </article>
            <article className="about__card">
              <BiCodeAlt className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects Completed</small>
            </article>
          </div>
          <p className="para">
            I'm Amit, a skilled front-end developer who loves creating
            captivating digital experiences. Using HTML, CSS, JavaScript and
            React, I bring static designs to life, making beautiful and
            interactive websites. Let's work together to bring your vision to
            reality with high-performance websites.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
