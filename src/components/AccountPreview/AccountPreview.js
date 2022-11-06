import { useContext } from "react";
import { AccountsContext } from "../../context/AccountsContext";
import { useNavigate } from "react-router-dom";
import { AccountPreviewButton } from "../../styled-components/Buttons";
const AccountPreview = ({ tipo_letras, num }) => {
  const { dispatch } = useContext(AccountsContext);
  const navigate = useNavigate();
  const options = {
    CC: "Cuenta Corriente",
    CA: "Caja de Ahorro",
  };
  const handleOnClick = () => {
    dispatch({
      type: "SELECT_ACCOUNT",
      payload: {
        accountNumber: num,
      },
    });
    navigate("/account");
  };
  return (
    <AccountPreviewButton onClick={handleOnClick}>
      <span>{options[tipo_letras?.toUpperCase()]}</span>
      <br />
      <span>{`Nro: ${num}`}</span>
    </AccountPreviewButton>
  );
};

export default AccountPreview;
