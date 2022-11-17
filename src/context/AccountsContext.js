import { createContext } from "react";
import { useReducer } from "react";
import { createPagination } from "../utils";
export const AccountsContext = createContext();
export default function AccountProvider({ children, initialState }) {
  const defaultState = {
    actualPage: 1,
    accounts: [],
    selectedAccount: null,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_ACCOUNT":
        const accounts = createPagination([...action.payload.accounts]);

        return { ...state, accounts: accounts };
      case "SELECT_ACCOUNT":
        const accountNumber = action.payload.accountNumber;

        const selectedAccount = state.accounts[state.actualPage - 1].find(
          (account) => account.n === accountNumber
        );
        return { ...state, selectedAccount: selectedAccount };
      case "NEXT_PAGE":
        if (state.actualPage < state.accounts.length) {
          return {
            ...state,
            actualPage: state.actualPage + 1,
          };
        } else {
          return state;
        }
      case "PREV_PAGE":
        if (state.actualPage > 0) {
          return {
            ...state,
            actualPage: state.actualPage - 1,
          };
        } else {
          return state;
        }

      default:
        throw new Error();
    }
  }
  const [accountState, dispatch] = useReducer(
    reducer,
    initialState ? initialState : defaultState
  );

  return (
    <AccountsContext.Provider value={{ accountState, dispatch }}>
      {children}
    </AccountsContext.Provider>
  );
}
