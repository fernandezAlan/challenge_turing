import styles from "./AccountPreview.module.css";
import { useContext } from "react";
import { AccountsContext } from "../../context/AccountsContext";
import { useNavigate } from "react-router-dom";
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
    <button className={styles.account_preview} onClick={handleOnClick}>
      <span>{options[tipo_letras?.toUpperCase()]}</span>
      <br />
      <span>{`Nro: ${num}`}</span>
    </button>
  );
};

export default AccountPreview;
