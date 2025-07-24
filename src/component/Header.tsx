import { appRoutes } from "@/data/ROUTES";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.globalHeader}>
      <div className={styles.logoSection}>
        <img
          className={styles.logoBalise}
          src="/logo/baliseHtmlBlanche.PNG"
          alt="LOGO"
        />
        <h2 className={styles.logoName}>DIAMOND CASE</h2>
      </div>
      <ul className={styles.menuNavBar}>
        <li className={styles.navBarList}>
          <Link className={styles.buttonGarment} href={appRoutes.ARTICLES(1)}>
            NOS POLOS
          </Link>
        </li>
        <li className={styles.navBarList}>
          <Link className={styles.buttonGarment} href="src/app/shop">
            NOS MONTRES
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
