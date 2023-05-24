import "./footer.css";

import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const date = new Date();
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="links">
          <span className="footer_span">Social Links</span>
          <ul className="social-links">
            <li>
              <a
                className="footer-link"
                href="https://www.linkedin.com/in/amit-jahagirdar-b3150320b/"
                target="_blank"
                rel="noreferrer">
                <ImLinkedin className="footer__socials" />
                <small>LinkedIn</small>
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://github.com/Amit258012"
                target="_blank"
                rel="noreferrer">
                <FaGithubSquare className="footer__socials" />
                <small>Github</small>
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://leetcode.com/Amit_Jahagirdar/"
                target="_blank"
                rel="noreferrer">
                <SiLeetcode className="footer__socials" />
                <small>Leetcode</small>
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">
          Copyright &copy;{date.getFullYear()} <strong>Amit Jahagirdar</strong>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
