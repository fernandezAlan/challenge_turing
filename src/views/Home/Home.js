//import Navbar from "../../components/Navbar/Navbar";
import { Navbar } from "../../styled-components/navbar";
import Button from "../../components/Button/Button";

import AccountPreview from "../../components/AccountPreview/AccountPreview";
import { useContext } from "react";
import { AccountsContext } from "../../context/AccountsContext";
import { useEffect, useState } from "react";
import { getAccountsHandler } from "../../utils";
import {
  TitlesContainer,
  AccountsContainer,
  ButtonContainer,
} from "../../styled-components/Container";
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
        <TitlesContainer>
          <h2>Consulta tu Saldo</h2>
          <h1>Selecciona la Cuenta a Consultar</h1>
        </TitlesContainer>
        <AccountsContainer>
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
        </AccountsContainer>
        <ButtonContainer>
          <Button>Salir</Button>
        </ButtonContainer>
      </main>
    </>
  );
};

export default Home;
