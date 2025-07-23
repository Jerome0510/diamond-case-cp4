import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.globalHeader}>
      <ul className={styles.menuNavBar}>
        <li className={styles.navBarList}>
          <button className={styles.buttonGarment}>POLOS</button>
        </li>
        <li className={styles.navBarList}>
          <button className={styles.buttonGarment}>PANTALONS</button>
        </li>
        <li className={styles.navBarList}>
          <button className={styles.buttonGarment}>CHEMISES</button>
        </li>
        <li className={styles.navBarList}>
          <button className={styles.buttonGarment}>PULLS</button>
        </li>
        <li className={styles.navBarList}>
          <button className={styles.buttonGarment}>CHAUSSURES</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
