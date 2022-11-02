import styles from "./NextPrevButton.module.css";
import { useContext } from "react";
import { AccountsContext } from "../../context/AccountsContext";
const NextPrevButton = ({ children, type }) => {
  const { dispatch } = useContext(AccountsContext);
  const handlerOnClick = () => {
    dispatch({ type: type });
  };
  return (
    <button className={styles.next_prev} onClick={handlerOnClick}>
      {children}
    </button>
  );
};
export default NextPrevButton;
