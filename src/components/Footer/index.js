import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Alicen Bender</h2>
      <p>
        <ul>
          <a href="https://github.com/abender12">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/alicen-b-665134a9/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/alicenbee/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;