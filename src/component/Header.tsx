import styles from "./Header.module.css";

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
          <button className={styles.buttonGarment}>NOS POLOS</button>
        </li>
        <li className={styles.navBarList}>
          <button className={styles.buttonGarment}>NOS MONTRES</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
