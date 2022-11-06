import { useContext } from "react";
import { AccountsContext } from "../../context/AccountsContext";
import { NextPrevPage } from "../../styled-components/Buttons";
const NextPrevButton = ({ children, type }) => {
  const { dispatch } = useContext(AccountsContext);
  const handlerOnClick = () => {
    dispatch({ type: type });
  };
  return <NextPrevPage onClick={handlerOnClick}>{children}</NextPrevPage>;
};
export default NextPrevButton;
