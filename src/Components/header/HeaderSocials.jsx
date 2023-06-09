import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/amit-jahagirdar-b3150320b/"
        target="_blank"
        rel="noreferrer">
        <ImLinkedin />
      </a>
      <a href="https://github.com/Amit258012" target="_blank" rel="noreferrer">
        <FaGithubSquare />
      </a>
      <a
        href="https://leetcode.com/Amit_Jahagirdar/"
        target="_blank"
        rel="noreferrer">
        <SiLeetcode />
      </a>
    </div>
  );
}

export default HeaderSocials;
