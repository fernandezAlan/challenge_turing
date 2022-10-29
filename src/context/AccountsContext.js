import { createContext } from "react";
import { useReducer } from "react";
export const AccountsContext = createContext();
export default function AccountProvider({ children }) {
  const initialState = {
    accounts: [],
    selectedAccount: null,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_ACCOUNT":
        return { ...state, accounts: action.payload.accounts };
      case "SELECT_ACCOUNT":
        return { ...state, selectedAccount: action.payload.selectedAccount };
      default:
        throw new Error();
    }
  }
  const [accountState, dispatch] = useReducer(reducer, initialState);

  return (
    <AccountsContext.Provider value={{ accountState, dispatch }}>
      {children}
    </AccountsContext.Provider>
  );
}
