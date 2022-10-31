import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import styles from "./SelectedAccount.module.css";
const SelectedAccount = () => {
  return (
    <>
      <Navbar />
      <section className={styles.titles_container}>
        <h2>Consulta de saldo</h2>
        <h1>Este es tu saldo actual</h1>
      </section>
      <div className={styles.content_container}>
        <section>
          <span>Saldo de la cuenta:</span>
          <span>15000</span>
        </section>
        <section>
          <span>Tipo de cuenta:</span>
          <span>Caja de Ahorro en Pesos</span>
        </section>
        <section>
          <span>Numero de cuenta:</span>
          <span>xxxxxxxxxxxxxxxxxx</span>
        </section>
      </div>
      <section className={styles.button_container}>
        <Button>Salir</Button>
      </section>
    </>
  );
};

export default SelectedAccount;
