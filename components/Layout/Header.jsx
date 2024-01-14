import { useState } from "react";
import Modal from "../Main/modal"; // Replace 'Modal' with the actual modal component path
import style from "@/styles/Layout/Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${style.navbar}`}>
      <div className={`${style.navbarLogo}`}>
        <p>N</p>
      </div>
      <div className={`${style.navbarMenu}`}>
        <div className={`${style.navbarLeft}`}>
          <Link href={"/"}>
            <p href="">Home</p>
          </Link>
          <Link href={"/experience"}>
            <p href="">Experience</p>
          </Link>
          <Link href={"/portfolio"}>
            <p href="">Portfolio</p>
          </Link>
        </div>
        <div className={`${style.navbarRight}`}>
          <button onClick={handleContactClick}>Contact</button>
        </div>
      </div>
      <div className={`${style["hamburger-menu"]}`} onClick={handleMenuClick}>
        <div className={`${style["bar"]}`}></div>
        <div className={`${style["bar"]}`}></div>
        <div className={`${style["bar"]}`}></div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
