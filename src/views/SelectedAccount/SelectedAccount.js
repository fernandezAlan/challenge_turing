import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import styles from "./SelectedAccount.module.css";
import { useContext } from "react";
import { AccountsContext } from "../../context/AccountsContext";
import { useNavigate } from "react-router-dom";

const SelectedAccount = () => {
  const { accountState } = useContext(AccountsContext);
  const navigate = useNavigate();
  const options = {
    CC: "Cuenta Corriente",
    CA: "Caja de Ahorro",
  };

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
          <span>{accountState?.selectedAccount?.saldo}</span>
        </section>
        <section>
          <span>Tipo de cuenta:</span>
          <span>
            {options[accountState?.selectedAccount?.tipo_letras.toUpperCase()]}
          </span>
        </section>
        <section>
          <span>Numero de cuenta:</span>
          <span>{accountState?.selectedAccount?.n}</span>
        </section>
      </div>
      <section className={styles.button_container}>
        <Button onClick={() => navigate("/")}>Salir</Button>
      </section>
    </>
  );
};

export default SelectedAccount;
