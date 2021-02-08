import { useState } from "react";
import Image from "next/image";
import style from "./Nav.module.css";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={`${style.navbar} ${showMenu ? style.responsive : ""}`}>
      <Image
        src="/logo.svg"
        alt="Logo"
        className={style.logo}
        width={200}
        height={45}
      />
      <a
        href="https://github.com/tuliocll/summaryze-dev#about-it"
        target="_blank"
      >
        About
      </a>
      <a href="https://github.com/tuliocll/summaryze-dev" target="_blank">
        Github
      </a>
      <a href="#how-to-use-it">How to use</a>
      <a href="#" class={style.menu} onClick={toggleMenu}>
        <FiMenu color="#111" />
      </a>
    </nav>
  );
}

export default Navbar;
