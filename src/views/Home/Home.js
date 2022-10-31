import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import styles from "./Home.module.css";
import AccountPreview from "../../components/AccountPreview/AccountPreview";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.titles_container}>
          <h2>Consulta tu Saldo</h2>
          <h1>Selecciona la Cuenta a Consultar</h1>
        </div>
        <section className={styles.accounts_container}>
          <AccountPreview />
          <AccountPreview />
          <AccountPreview />
          <AccountPreview />
          <AccountPreview />
          <AccountPreview />
        </section>
        <section className={styles.button_container}>
          <Button>Salir</Button>
        </section>
      </main>
    </>
  );
};

export default Home;
