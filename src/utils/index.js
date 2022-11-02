import axios from "axios";
export function getAccounts() {
  return axios.get("https://api.npoint.io/97d89162575a9d816661");
}

export const getAccountsHandler = async ({
  setError,
  setLoading,
  dispatch,
}) => {
  try {
    const res = await getAccounts();
    const action = {
      type: "ADD_ACCOUNT",
      payload: {
        accounts: res.data.cuentas,
      },
    };
    dispatch(action);
    setLoading(false);
  } catch (error) {
    setError(true);
  }
};

export const createPagination = (accounts) => {
  const allowAccounts = filterAccountsTypes(accounts);
  const pagination = [];
  if (allowAccounts.length > 6) {
    for (let i = 0; allowAccounts.length !== 0; i++) {
      let accountsPerPage = pagination.length > 0 ? 4 : 5;
      pagination.push(allowAccounts.splice(0, accountsPerPage));
    }
  } else {
    pagination.push(allowAccounts);
  }
  return pagination;
};

const filterAccountsTypes = (accounts) => {
  const allowsTypes = accounts.filter(
    (account) =>
      account.tipo_letras.toUpperCase() === "CC" ||
      account.tipo_letras.toUpperCase() === "CA"
  );
  return allowsTypes.filter(
    (account) => account.moneda === "$" || account.moneda === "u$s"
  );
};
