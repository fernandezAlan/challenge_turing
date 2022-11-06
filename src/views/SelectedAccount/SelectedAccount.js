import { Navbar } from "../../styled-components/navbar";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import { AccountsContext } from "../../context/AccountsContext";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  TitlesContainer,
  ContentContainer,
} from "../../styled-components/Container";
import { SectionContent } from "../../styled-components/Sections";

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
      <TitlesContainer>
        <h2>Consulta de saldo</h2>
        <h1>Este es tu saldo actual</h1>
      </TitlesContainer>
      <ContentContainer>
        <SectionContent>
          <span>Saldo de la cuenta:</span>
          <span>{accountState?.selectedAccount?.saldo}</span>
        </SectionContent>
        <SectionContent>
          <span>Tipo de cuenta:</span>
          <span>
            {options[accountState?.selectedAccount?.tipo_letras.toUpperCase()]}
          </span>
        </SectionContent>
        <SectionContent>
          <span>Numero de cuenta:</span>
          <span>{accountState?.selectedAccount?.n}</span>
        </SectionContent>
      </ContentContainer>
      <ButtonContainer>
        <Button onClick={() => navigate("/")}>Salir</Button>
      </ButtonContainer>
    </>
  );
};

export default SelectedAccount;
