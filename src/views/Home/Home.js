import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import styles from "./Home.module.css";
import AccountPreview from "../../components/AccountPreview/AccountPreview";
import { useContext } from "react";
import { AccountsContext } from "../../context/AccountsContext";
import { useEffect, useState } from "react";
import { getAccountsHandler, getAccounts } from "../../utils";
import NextPrevButton from "../../components/NextPrevButton/NextPrevButton";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const [actualPage, setActualPage] = useState(0);
  const { accountState, dispatch } = useContext(AccountsContext);
  useEffect(() => {
    getAccountsHandler({ setError, setLoading, dispatch });
  }, []);
  useEffect(() => {
    console.log("accountState", accountState);
  }, [accountState]);

  return (
    <>
      <Navbar />
      <main>
        <div className={styles.titles_container}>
          <h2>Consulta tu Saldo</h2>
          <h1>Selecciona la Cuenta a Consultar</h1>
        </div>
        <section className={styles.accounts_container}>
          {accountState.accounts[accountState.actualPage - 1]?.length <= 4 && (
            <NextPrevButton type={"PREV_PAGE"}>
              {"<< Opciones Anteriores"}
            </NextPrevButton>
          )}
          {accountState.accounts[accountState.actualPage - 1]?.map(
            (account) => (
              <AccountPreview
                tipo_letras={account.tipo_letras}
                num={account.n}
              />
            )
          )}
          {accountState.accounts[accountState.actualPage - 1]?.length !== 6 &&
          accountState.actualPage !== accountState.accounts.length ? (
            <NextPrevButton type={"NEXT_PAGE"}>
              {"Más Opciones >>"}
            </NextPrevButton>
          ) : null}
        </section>
        <section className={styles.button_container}>
          <Button>Salir</Button>
        </section>
      </main>
    </>
  );
};

export default Home;
