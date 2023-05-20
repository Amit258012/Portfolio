import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HeaderSocials() {
    return (
        <div className="header__socials">
            <a
                href="#"
                target="_blank"
            >
                <ImLinkedin />
            </a>
            <a
                href="#"
                target="_blank"
            >
                <FaGithubSquare />
            </a>
            <a
                href="#"
                target="_blank"
            >
                <SiLeetcode />
            </a>
        </div>
    );
}

export default HeaderSocials;
