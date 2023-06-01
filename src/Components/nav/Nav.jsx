import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

import { useState } from "react";

function Nav({ active }) {
  const [activeNav, setActiveNav] = useState(null);

  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={`nav-item ${
          activeNav === "#" || active === "#" ? "nav-item--active" : ""
        }`}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`nav-item ${
          activeNav === "#about" || active === "#about"
            ? "nav-item--active"
            : ""
        }`}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`nav-item ${
          activeNav === "#experience" || active === "#experience"
            ? "nav-item--active"
            : ""
        }`}>
        <BiBookAlt />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={`nav-item ${
          activeNav === "#portfolio" || active === "#portfolio"
            ? "nav-item--active"
            : ""
        }`}>
        <AiFillAppstore />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`nav-item ${
          activeNav === "#contact" || active === "#contact"
            ? "nav-item--active"
            : ""
        }`}>
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Nav;
