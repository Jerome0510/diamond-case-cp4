import styles from "./Accueil.module.css";

const Accueil = () => {
  return (
    <div className={styles.illustration}>
      <ul className={styles.illustrationList}>
        <li className={styles.illustrationElement}>
          <img
            className={styles.firstPicture}
            src="/images/pictureOne.jpg"
            alt="picture one"
          />
        </li>
        <li>
          <img
            className={styles.secondpicture}
            src="/images/pictureTree.jpg"
            alt="picture tree"
          />
        </li>
        <li>
          <img
            className={styles.thirdPicture}
            src="/images/pictureTwo.jpg"
            alt="picture two"
          />
        </li>
      </ul>
    </div>
  );
};

export default Accueil;
