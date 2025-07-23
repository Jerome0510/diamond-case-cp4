import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.globalHeader}>
      <div className={styles.navBar}>
        <ul className={styles.menuNavBar}>
          <li className={styles.navBarList}></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
