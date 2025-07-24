"use client";

import Link from "next/link";
import { useState } from "react";
import { appRoutes } from "@/data/ROUTES";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.menuThatOpens}>
      <button
        onClick={toggleMenu}
        className={`${styles.menuBurger} ${isOpen ? styles.open : ""}`}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <nav className={`${styles.navBar} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menuOpen}>
          <li>
            <Link href={appRoutes.ARTICLES(1)}>NOS POLOS</Link>
          </li>
          <li>
            <Link href="">NOS MONTRES</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
