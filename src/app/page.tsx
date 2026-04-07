import styles from "./page.module.css";
import Accueil from "@/component/Accueil";

const Home = () => {
  return (
    <section className={styles.homeBody}>
      <Accueil />
    </section>
  );
};

export default Home;
