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
        className={`nav-item ${active === "#" ? "nav-item--active" : ""}`}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`nav-item ${active === "#about" ? "nav-item--active" : ""}`}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`nav-item ${
          active === "#experience" ? "nav-item--active" : ""
        }`}>
        <BiBookAlt />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={`nav-item ${
          active === "#portfolio" ? "nav-item--active" : ""
        }`}>
        <AiFillAppstore />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`nav-item ${
          active === "#contact" ? "nav-item--active" : ""
        }`}>
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Nav;
